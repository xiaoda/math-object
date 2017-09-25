/**
 * 数字类
 */

import MoBase from './base'

class MoNumber extends MoBase {
  constructor (input) {
    super()

    /* 默认属性 */
    this.props = {
      sign: null,       // 符号
      numerator: null,  // 分子
      denominator: null // 分母
    }

    switch (helper.getType(input)) {
      case 'object':
        let options = input
        if (!this._checkNumsLegal(options.numerator, options.denominator)) return
        this._initNum(options.numerator, options.denominator, options.sign)
        break

      case 'string':
      case 'number':
      default:
        if (!this._checkNumsLegal(input)) return
        this._initNum(input)
    }
  }

  /* 检查数字是否合法 */
  _checkNumsLegal (...nums) {
    if (helper.isArr(nums[0])) nums = nums[0]
    return nums.every((num) => util.checkNumLegal(num))
  }

  /* 初始化数字 */
  _initNum (numerator, denominator = 1, sign = null) {
    numerator = util.parseNum(numerator)
    denominator = util.parseNum(denominator)
    this._handleSign(numerator, denominator, sign)
    numerator = util.dropSign(numerator)
    denominator = util.dropSign(denominator)
    this._handleFraction(numerator, denominator)
  }

  /* 处理正负 */
  _handleSign (numerator, denominator, sign) {
    sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign))
    this.setProp({sign})
  }

  /* 处理分数 */
  _handleFraction (numerator, denominator) {
    let decimalDigit = Math.max(util.getDecimalDigit(numerator), util.getDecimalDigit(denominator))
    numerator = helper.multiply(numerator, 10, decimalDigit)
    denominator = helper.multiply(denominator, 10, decimalDigit)
    let greatestCommonDivisor = util.getGreatestCommonDivisor(numerator, denominator)
    numerator = numerator / greatestCommonDivisor
    denominator = denominator / greatestCommonDivisor
    this.setProp({numerator, denominator})
  }

  /* 获取值 */
  getVal () {
    let {sign, numerator, denominator} = this.props
    return numerator / denominator * util.signStrToNum(sign)
  }

  /* 判断是否为正 */
  isPositive () {
    return this.props.sign === 'positive'
  }

  /* 判断是否为负 */
  isNegative () {
    return this.props.sign === 'negative'
  }

  /* 判断是否为零 */
  isZero () {
    return this.props.sign === 'zero'
  }

  /* 判断是否整数 */
  isInteger () {
    return this.props.denominator === 1
  }

  /* 判断是否分数 */
  isDecimal () {
    return this.props.denominator !== 1
  }

  /* 判断是否相等 */
  isEqual (input) {
    let target = input instanceof MoNumber ? input : new MoNumber(input)
    return (
      this.props.sign === target.props.sign &&
      this.props.numerator === target.props.numerator &&
      this.props.denominator === target.props.denominator
    )
  }

  /* 获取绝对值 */
  getAbsoluteVal () {
    let options = {...this.props}
    let signMap = {
      negative: 'positive'
    }
    options.sign = signMap[options.sign] || options.sign
    return new MoNumber(options)
  }

  /* 获取相反数 */
  getOppositeNum () {
    let options = {...this.props}
    let signMap = {
      positive: 'negative',
      negative: 'positive'
    }
    options.sign = signMap[options.sign] || options.sign
    return new MoNumber(options)
  }

  /* 获取倒数 */
  getReciprocal () {
    let options = {...this.props}
    if (this.props.numerator === 0) {
      options.numerator = 0
      options.denominator = 1
    } else {
      options.numerator = this.props.denominator
      options.denominator = this.props.numerator
    }
    return new MoNumber(options)
  }

  /* 加法 */
  add (input) {
    let target = input instanceof MoNumber ? input : new MoNumber(input)
    let denominator = util.getLowestCommonMultiple(this.props.denominator, target.props.denominator)
    let thisNumerator = this.props.numerator * (denominator / this.props.denominator) * util.signStrToNum(this.props.sign)
    let targetNumerator = target.props.numerator * (denominator / target.props.denominator) * util.signStrToNum(target.props.sign)
    let numerator = thisNumerator + targetNumerator
    return new MoNumber({numerator, denominator})
  }

  /* 减法：加法的逆运算 */
  minus (input) {
    let target = input instanceof MoNumber ? input : new MoNumber(input)
    return this.add(target.getOppositeNum())
  }

  /* 乘法 */
  multiply (input) {
    let target = input instanceof MoNumber ? input : new MoNumber(input)
    let numerator = this.props.numerator * target.props.numerator
    let denominator = this.props.denominator * target.props.denominator
    let sign = util.getNumsSign(util.signStrToNum(this.props.sign), util.signStrToNum(target.props.sign))
    return new MoNumber({sign, numerator, denominator})
  }

  /* 除法：乘法的逆运算 */
  devide (input) {
    let target = input instanceof MoNumber ? input : new MoNumber(input)
    return this.multiply(target.getReciprocal())
  }

  /* 乘方（幂、指数运算） */
  power (input) {
    let exponent = util.parseNum(input)
    let numerator = Math.pow(this.props.numerator, exponent)
    let denominator = Math.pow(this.props.denominator, exponent)
    let sign = util.getNumsSign(new Array(exponent).fill(util.signStrToNum(this.props.sign)))
    return new MoNumber({sign, numerator, denominator})
  }
}

module.exports = MoNumber

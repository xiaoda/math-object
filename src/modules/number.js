/**
 * 数字类
 */

const helper = require('../general/helper')
const util = require('../general/util')
const MoBase = require('./base')

class MoNumber extends MoBase {
  constructor (input) {
    super()

    /* 默认属性 */
    this.props = {
      sign: null,       // 符号
      numerator: null,  // 分子
      denominator: null // 分母
    }

    if (input instanceof MoNumber) {
      this.setProp(input.props)
    } else {
      switch (helper.getType(input)) {
        case 'object': {
          let {numerator, denominator, sign} = input
          if (!this._checkNumsLegal(numerator, denominator)) return
          this._initNum(numerator, denominator, sign)
          break
        }

        case 'number':
        case 'string':
        default:
          if (!this._checkNumsLegal(input)) return
          this._initNum(input)
      }
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

    this._handleFraction(numerator, denominator, this.props.sign)
  }

  /* 处理正负 */
  _handleSign (numerator, denominator, sign) {
    sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign))

    this.setProp({sign})
  }

  /* 处理分数 */
  _handleFraction (numerator, denominator, sign) {
    let decimalDigit = Math.max(util.getDecimalDigit(numerator), util.getDecimalDigit(denominator))

    numerator = helper.multiply(numerator, 10, decimalDigit)
    denominator = helper.multiply(denominator, 10, decimalDigit)

    let greatestCommonDivisor = util.getGreatestCommonDivisor(numerator, denominator)

    numerator = numerator / greatestCommonDivisor
    denominator = denominator / greatestCommonDivisor

    let infinityProcResult = this._handleInfinity(numerator, denominator, sign)

    numerator = infinityProcResult.numerator
    denominator = infinityProcResult.denominator
    sign = infinityProcResult.sign

    this.setProp({numerator, denominator, sign})
  }

  /* 处理零、无穷大等极端情况 */
  _handleInfinity (numerator, denominator, sign) {
    let conditionAllZero = util.isZero(numerator) && util.isZero(denominator)
    let conditionAllInfinity = util.isInfinity(numerator) && util.isInfinity(denominator)

    if (conditionAllZero || conditionAllInfinity) {
      numerator = null
      denominator = null
      sign = null
    } else {
      if (util.isZero(denominator)) numerator *= Infinity
      if (util.isInfinity(numerator)) {
        denominator = 1

        if (sign === 'zero') sign = util.getNumsSign(numerator, denominator)
        else sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign))
      }
      if (util.isInfinity(denominator)) numerator = 0
      if (util.isZero(numerator)) {
        denominator = 1
        sign = 'zero'
      }
    }

    return {numerator, denominator, sign}
  }

  /* 获取值 */
  val () {
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
    return this.props.denominator === 1 && !util.isInfinity(this.props.numerator)
  }

  /* 判断是否分数 */
  isDecimal () {
    return this.props.denominator !== 1
  }

  /* 判断是否相等 */
  isEqual (input) {
    let target = new MoNumber(input)

    return (
      this.props.sign === target.props.sign &&
      this.props.numerator === target.props.numerator &&
      this.props.denominator === target.props.denominator
    )
  }

  /* 判断是否不相等 */
  isNotEqual (input) {
    let target = new MoNumber(input)

    return (
      this.props.sign !== target.props.sign ||
      this.props.numerator !== target.props.numerator ||
      this.props.denominator !== target.props.denominator
    )
  }

  /* 获取绝对值 */
  absolute () {
    let options = {...this.props}
    let signMap = {
      positive: 'positive',
      negative: 'positive',
      zero: 'zero'
    }

    options.sign = signMap[options.sign] || options.sign

    return new MoNumber(options)
  }

  /* 获取相反数 */
  opposite () {
    let options = {...this.props}
    let signMap = {
      positive: 'negative',
      negative: 'positive',
      zero: 'zero'
    }

    options.sign = signMap[options.sign] || options.sign

    return new MoNumber(options)
  }

  /* 获取倒数 */
  reciprocal () {
    let options = {...this.props}

    options.numerator = this.props.denominator
    options.denominator = this.props.numerator
    options.sign = this.props.sign

    return new MoNumber(options)
  }

  /* 加法 */
  plus (input) {
    let target = new MoNumber(input)
    let denominator = util.getLowestCommonMultiple(this.props.denominator, target.props.denominator)
    let thisNumerator = this.props.numerator * (denominator / this.props.denominator) * util.signStrToNum(this.props.sign)
    let targetNumerator = target.props.numerator * (denominator / target.props.denominator) * util.signStrToNum(target.props.sign)
    let numerator = thisNumerator + targetNumerator

    return new MoNumber({numerator, denominator})
  }

  /* 减法：加法的逆运算 */
  minus (input) {
    let target = new MoNumber(input)

    return this.plus(target.opposite())
  }

  /* 乘法 */
  multiply (input) {
    let target = new MoNumber(input)
    let numerator = this.props.numerator * target.props.numerator
    let denominator = this.props.denominator * target.props.denominator
    let sign = util.getNumsSign(util.signStrToNum(this.props.sign), util.signStrToNum(target.props.sign))

    return new MoNumber({sign, numerator, denominator})
  }

  /* 除法：乘法的逆运算 */
  devide (input) {
    let target = new MoNumber(input)

    return this.multiply(target.reciprocal())
  }

  /* 乘方（幂、指数运算） */
  power (input) {
    if (this.isNegative() && input < 1 && input > -2) return NaN

    let exponent = util.parseNum(input)
    let numerator = Math.pow(this.props.numerator, exponent)
    let denominator = Math.pow(this.props.denominator, exponent)
    let sign

    if (input >= 1 && Number.isInteger(input)) {
      sign = util.getNumsSign(new Array(exponent).fill(util.signStrToNum(this.props.sign)))
    } else {
      sign = this.props.sign
    }

    return new MoNumber({sign, numerator, denominator})
  }
}

module.exports = MoNumber

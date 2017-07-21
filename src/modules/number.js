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

    if (helper.isObj(input)) {
      let options = input
      options.numerator = util.parseNum(options.numerator)
      options.denominator = util.parseNum(options.denominator)
      let fraction = this._optimizeFraction(options.numerator, options.denominator)
      options.numerator = fraction.numerator
      options.denominator = fraction.denominator
      this.setProp(options)
      return
    }

    if (!util.checkNumLegal(input)) return
    let numText = util.parseNumText(input)

    numText = this._handleSign(numText)
    numText = this._handleFraction(numText)
  }

  // 处理正负
  _handleSign (numText) {
    let sign = util.getSign(numText)
    this.setProp({sign})
    return helper.toStr(util.dropSign(numText))
  }

  /* 处理分数 */
  _handleFraction (numText) {
    let fraction = this._optimizeFraction(helper.toNum(numText), 1)
    let numerator = fraction.numerator
    let denominator = fraction.denominator
    this.setProp({numerator, denominator})
    return numText
  }

  /* 优化分子和分母 */
  _optimizeFraction (numerator, denominator) {
    let decimalDigit = Math.max(util.getDecimalDigit(numerator), util.getDecimalDigit(denominator))
    numerator = helper.multiply(numerator, 10, decimalDigit)
    denominator = helper.multiply(denominator, 10, decimalDigit)
    let greatestCommonDivisor = util.getGreatestCommonDivisor(numerator, denominator)
    numerator /= greatestCommonDivisor
    denominator /= greatestCommonDivisor
    return {numerator, denominator}
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

  /* 获取值 */
  getVal () {
    let {sign, numerator, denominator} = this.props
    return numerator / denominator * (['positive', 'zero'].includes(sign) ? 1 : -1)
  }
}

module.exports = MoNumber

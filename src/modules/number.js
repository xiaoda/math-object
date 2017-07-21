/**
 * 数字类
 */

import MoBase from './base'

class MoNumber extends MoBase {
  constructor (inputNum) {
    super()
    let numText = util.parseNumText(inputNum)
    if (!util.checkNumLegal(numText)) return

    /* 默认属性 */
    this.props = {
      sign: null,       // 符号
      numerator: null,  // 分子
      denominator: null // 分母
    }

    numText = this._handleSign(numText)
    numText = this._handleFraction(numText)
  }

  // 处理正负
  _handleSign (numText) {
    let sign = util.getSign(numText)
    this.setProp({sign})
    return util.dropSign(numText)
  }

  /* 处理分数 */
  _handleFraction (numText) {
    let decimalDigit = util.getDecimalDigit(numText)
    let numerator = helper.multiply(helper.toNum(numText), 10, decimalDigit)
    let denominator = helper.multiply(1, 10, decimalDigit)
    let greatestCommonDivisor = util.getGreatestCommonDivisor(numerator, denominator)
    numerator /= greatestCommonDivisor
    denominator /= greatestCommonDivisor
    this.setProp({numerator, denominator})
    return numText
  }
}

module.exports = MoNumber

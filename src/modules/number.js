/**
 * 数字类
 */

const rules = {
  zero: /^[+-]?0$/,
  positive: /^[^-]\+?/,
  negative: /^-/
}

class MoNumber {
  constructor (inputNum) {
    let numText = helper.toStr(inputNum)

    if (!this.checkLegal(numText)) return

    // 默认属性
    this.props = {
      sign: null,
      numerator: null,
      denominator: null
    }

    // 检查正负并去掉符号
    this.checkSign(numText)
    numText = this.dropSign(numText)
  }

  // 检查输入合法性
  checkLegal (numText) {
    return true
  }

  // 检查正负
  checkSign (numText) {
    let sign
    if (rules.zero.test(numText)) {
      sign = 'zero'
    } else if (rules.positive.test(numText)) {
      sign = 'positive'
    } else if (rules.negative.test(numText)) {
      sign = 'negative'
    }
    this.setProp({sign})
  }

  // 去掉符号
  dropSign (numText) {
    return numText.replace(/[+-]?/g, '')
  }

  setProp (props) {
    helper.forEachObj(props, (value, prop) => {
      this.props[prop] = value
    })
  }
}

module.exports = MoNumber

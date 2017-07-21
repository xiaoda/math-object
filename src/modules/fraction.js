/**
 * 分数函数，返回数字类
 */

import MoNumber from './number'

const moFraction = (...args) => {
  if (helper.isObj(args[0])) {
    let options = {
      sign: 'positive',
      numerator: 1,
      denominator: 1,
      ...args[0]
    }
    return new MoNumber(options)
  } else {
    let numerator = helper.isUndefined(args[0]) ? 1 : args[0]
    let denominator = helper.isUndefined(args[1]) ? 1 : args[1]
    let signs = [util.getSign(numerator), util.getSign(denominator)]
    let sign
    if (helper.chain(signs, ['countArrItem', 'zero'], 'toBool')) sign = 'zero'
    else sign = helper.multiply(1, -1, helper.countArrItem(signs, 'negative')) > 0 ? 'positive' : 'negative'
    numerator = util.dropSign(numerator)
    denominator = util.dropSign(denominator)
    return new MoNumber({sign, numerator, denominator})
  }
}

module.exports = moFraction

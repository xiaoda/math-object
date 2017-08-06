/**
 * 分数函数，返回数字类
 */

import MoNumber from './number'

const moFraction = (...args) => {
  if (helper.isObj(args[0])) {
    let options = args[0]
    return new MoNumber(options)
  } else {
    let numerator = helper.isUndefined(args[0]) ? 1 : args[0]
    let denominator = helper.isUndefined(args[1]) ? 1 : args[1]
    return new MoNumber({numerator, denominator})
  }
}

module.exports = moFraction

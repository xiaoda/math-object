/**
 * 分数函数，返回数字类
 */

const helper = require('../general/helper')
const MoNumber = require('./number')

/**
 * @param ({sign, numerator, denominator}) 或 (numerator, denominator)
 * @return MoNumber 数字类
 */
const moFraction = (...args) => {
  if (helper.isObj(args[0])) {
    let options = args[0]

    return new MoNumber(options)
  } else {
    let [numerator = 1, denominator = 1] = args

    return new MoNumber({numerator, denominator})
  }
}

module.exports = moFraction

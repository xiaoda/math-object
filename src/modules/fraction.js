/**
 * 分数函数，返回数字类
 */

const helper = require('../general/helper')
const MoNumber = require('./number')

/**
 * @param ({sign, numerator, denominator}) 或 (numerator, denominator)
 * @return MoNumber 数字类
 */
const moFraction = (...inputs) => {
  if (helper.isObj(inputs[0])) {
    let options = inputs[0]

    return new MoNumber(options)
  } else {
    let [numerator = 1, denominator = 1] = inputs

    return new MoNumber({numerator, denominator})
  }
}

module.exports = moFraction

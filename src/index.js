/**
 * Math Object 入口文件
 */

const helper = require('./general/helper')
const utils = require('./general/utils')
const MoPoint = require('./modules/point')
const MoVector = require('./modules/vector')

const Mo = {
  ...utils
}

Mo.Point = (...params) => new MoPoint(...params)
Mo.Vector = (...params) => new MoVector(...params)

module.exports = Mo

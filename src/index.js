/**
 * Math Object 入口文件
 */

const helper = require('./general/helper')
const util = require('./general/util')
const MoPoint = require('./modules/point')
const MoVector = require('./modules/vector')

const Mo = {
  ...util
}

Mo.Point = (...params) => new MoPoint(...params)
Mo.Vector = (...params) => new MoVector(...params)

Object.freeze(Mo)
module.exports = Mo

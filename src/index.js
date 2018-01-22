/**
 * Math Object 入口文件
 */

const config = require('./general/config')
const helper = require('./general/helper')
const util = require('./general/util')
const MoNumber = require('./modules/number')
const MoPoint = require('./modules/point')
const MoLineSegment = require('./modules/line-segment')
const moFraction = require('./modules/fraction')

/* 返回 math object 对象 */

let Mo = (...params) => new MoNumber(...params)

Mo.Number = (...params) => new MoNumber(...params)
Mo.Point = (...params) => new MoPoint(...params)
Mo.LineSegment = (...params) => new MoLineSegment(...params)

Mo.fraction = moFraction

/* 功能方法 */

helper.forEachObj(util, (func, name) => {
  Mo[name] = func
})

module.exports = Mo

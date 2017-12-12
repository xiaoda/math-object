/**
 * Math Object 入口文件
 */

const config = require('./general/config')
const helper = require('./general/helper')
const util = require('./general/util')
const MoNumber = require('./modules/number')
const MoDot = require('./modules/dot')
const MoLine = require('./modules/line')
const moFraction = require('./modules/fraction')

/* 返回 math object 对象 */

let mo = (...params) => new MoNumber(...params)

mo.Number = (...params) => new MoNumber(...params)
mo.Dot = (...params) => new MoDot(...params)
mo.Line = (...params) => new MoLine(...params)

mo.fraction = moFraction

/* 功能方法 */

helper.forEachObj(util, (func, name) => {
  mo[name] = func
})

module.exports = mo

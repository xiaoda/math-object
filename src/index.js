/**
 * Math Object 入口文件
 */

import MoNumber from './modules/number'
import MoLine from './modules/line'
import moFraction from './modules/fraction'

/* log 方法封装 */

if (config.isDev()) {
  window.C = (...args) => {
    if (window.console) console.log(...args)
  }
}

/* 返回 math object 对象 */

let mo = (...params) => new MoNumber(...params)

mo.Number = MoNumber
mo.Line = MoLine
mo.fraction = moFraction

/* 功能方法 */

helper.forEachObj(util, (func, name) => {
  mo[name] = func
})

module.exports = mo

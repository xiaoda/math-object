/**
 * Math Object 入口文件
 */

import MoNumber from './modules/number'

/* log 方法封装 */
window.C = (...args) => {
  if (config.isDev() && window.console) console.log(...args)
}

/* 返回 math object 对象 */
let mo = (...params) => new MoNumber(...params)

/* 功能方法 */
helper.forEachObj(util, (func, name) => {
  mo[name] = func
})

module.exports = mo

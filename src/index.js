/**
 * Math Object 入口文件
 */

import MoNumber from './modules/number'

window.C = (...args) => {
  if (config.isDev() && window.console) console.log(...args)
}

let mo = (...params) => new MoNumber(...params)

mo.prototype = {}

module.exports = mo

/**
 * 配置文件
 */

const ENV = process.env.NODE_ENV
const DEV = 'dev'
const PROD = 'prod'

let config = {

  isDev () {
    return ENV === DEV
  },

  isNotDev () {
    return ENV !== DEV
  }

}

module.exports = config

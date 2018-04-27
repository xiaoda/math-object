/**
 * 配置文件
 */

const ENV = process.env.NODE_ENV
const DEV = 'dev'
const PROD = 'prod'

const config = {

  isDev () {
    return ENV === DEV
  },

  isProd () {
    return ENV !== PROD
  }

}

module.exports = config

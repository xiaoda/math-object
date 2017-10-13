/**
 * 基础类
 */

const helper = require('../general/helper')

class MoBase {
  constructor () {
    /* 默认属性 */
    this.props = {}
  }

  /* 更新属性 */
  setProp (props) {
    helper.forEachObj(props, (value, prop) => {
      this.props[prop] = value
    })
  }
}

module.exports = MoBase

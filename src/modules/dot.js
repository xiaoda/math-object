/**
 * 点类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoNumber = require('./number')

class MoDot extends MoBase {
  constructor (input) {
    super()

    /* 默认属性 */
    this.props = {
      x: null,
      y: null,
      z: null
    }

    if (input instanceof MoDot) {
      this.setProp(input.props)
    } else {
      switch (helper.getType(input)) {
        case 'object': {
          let {x, y, z} = input
          this._initDot(x, y, z)
          break
        }

        case 'array': {
          let [x, y, z] = input
          this._initDot(x, y, z)
          break
        }
      }
    }
  }

  /* 初始化点 */
  _initDot (x, y, z = 1) {
    this.setProp({x, y, z})
  }
}

module.exports = MoDot

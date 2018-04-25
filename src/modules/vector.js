/**
 * 矢量类
 */

const helper = require('../general/helper')
const MoBase = require('./base')

class MoVector extends MoBase {
  constructor (input) {
    super()

    /* 默认属性 */
    this.props = {
      x: null,
      y: null,
      z: null
    }

    switch (helper.getType(input)) {
      case 'object': {
        let {x, y, z} = input
        this._initVector(x, y, z)
        break
      }

      case 'array': {
        let [x, y, z] = input
        this._initVector(x, y, z)
        break
      }
    }
  }

  /* 初始矢量 */
  _initVector (x, y, z) {
    x = helper.toNum(x)
    y = helper.toNum(y)
    z = helper.toNum(z)

    this.setProp({x, y, z})
  }

  /* 预处理点 */
  _getVector (input) {
    return input instanceof MoVector ? input : new MoVector(input)
  }

  /* 合并矢量 */
  mergeVector (vectors) {

  }
}

module.exports = MoVector

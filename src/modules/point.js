/**
 * 点类
 */

const helper = require('../general/helper')
const MoBase = require('./base')

class MoPoint extends MoBase {
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
        this._initPoint(x, y, z)
        break
      }

      case 'array': {
        let [x, y, z] = input
        this._initPoint(x, y, z)
        break
      }
    }
  }

  /* 初始化点 */
  _initPoint (x, y, z = 0) {
    x = helper.toNum(x)
    y = helper.toNum(y)
    z = helper.toNum(z)

    this.setProp({x, y, z})
  }

  /* 预处理点 */
  _getPoint (input) {
    return input instanceof MoPoint ? input : new MoPoint(input)
  }

  /* 获取点到点的距离 */
  getDistance (point) {
    point = this._getPoint(point)
    let distance = (
      (this.props.x - point.props.x) ** 2 +
      (this.props.y - point.props.y) ** 2 +
      (this.props.z - point.props.z) ** 2
    ) ** 0.5

    return distance
  }

  /* 获取特定方向、距离的点 */
  getPoint (vector, distance) {}
}

module.exports = MoPoint

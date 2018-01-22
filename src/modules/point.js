/**
 * 点类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoNumber = require('./number')

class MoPoint extends MoBase {
  constructor (...inputs) {
    super()

    /* 默认属性 */
    this.props = {
      x: null,
      y: null,
      z: null
    }

    if (inputs[0] instanceof MoPoint) {
      this.setProp(inputs[0].props)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object': {
          let {x, y, z} = inputs[0]
          this._initPoint(x, y, z)
          break
        }

        case 'array': {
          let [x, y, z] = inputs[0]
          this._initPoint(x, y, z)
          break
        }

        case 'number':
        case 'string': {
          let [x, y, z] = inputs
          this._initPoint(x, y, z)
          break
        }
      }
    }
  }

  /* 初始化点 */
  _initPoint (x, y, z = 0) {
    x = new MoNumber(x)
    y = new MoNumber(y)
    z = new MoNumber(z)

    this.setProp({x, y, z})
  }

  /* 获取到点的距离 */
  distanceToPoint (...inputs) {
    let point = new MoPoint(inputs)

    return point.props.x.minus(this.props.x).power(2)
      .plus(point.props.y.minus(this.props.y).power(2))
      .plus(point.props.z.minus(this.props.z).power(2))
      .power(0.5)
  }

  /* 获取 x 方向，y 距离的点 */
  vectorDistancePoint () {}
}

module.exports = MoPoint

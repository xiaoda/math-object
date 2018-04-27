/**
 * 点类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoVector = require('./vector')

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
        this._init(x, y, z)
        break
      }

      case 'array': {
        let [x, y, z] = input
        this._init(x, y, z)
        break
      }
    }
  }

  /* 初始化 */
  _init (x, y, z = 0) {
    x = helper.toNum(x)
    y = helper.toNum(y)
    z = helper.toNum(z)

    this.setProp({x, y, z})
  }

  /* 预处理 */
  static initPoint (input) {
    return input instanceof MoPoint ? input : new MoPoint(input)
  }

  /* 获取点到点的距离 */
  getDistance (point) {
    point = MoPoint.initPoint(point)

    return (
      (this.props.x - point.props.x) ** 2 +
      (this.props.y - point.props.y) ** 2 +
      (this.props.z - point.props.z) ** 2
    ) ** 0.5
  }

  /* 根据矢量获取给定距离的点 */
  getPointByVector (vector, distance) {
    vector = MoVector.initVector(vector)
    distance = helper.toNum(distance)

    // (ax)2+(bx)2+(cx)2=y2
    let unit = (
      distance ** 2 / (
        vector.props.x ** 2 +
        vector.props.y ** 2 +
        vector.props.z ** 2
      )
    ) ** 0.5

    if (!Number.isFinite(unit)) unit = 0

    return new MoPoint({
      x: this.props.x + vector.props.x * unit,
      y: this.props.y + vector.props.y * unit,
      z: this.props.z + vector.props.z * unit
    })
  }

  /* 根据点获取给定比例的点 */
  getPointByPoint (point, ratio) {
    point = MoPoint.initPoint(point)
    ratio = helper.toNum(ratio)

    return new MoPoint({
      x: this.props.x * (1 - ratio) + point.props.x * ratio,
      y: this.props.y * (1 - ratio) + point.props.y * ratio,
      z: this.props.z * (1 - ratio) + point.props.z * ratio
    })
  }

  /* 根据点获取矢量 */
  getVector (point) {
    point = MoPoint.initPoint(point)

    return new MoVector({
      x: point.props.x - this.props.x,
      y: point.props.y - this.props.y,
      z: point.props.z - this.props.z
    })
  }
}

module.exports = MoPoint

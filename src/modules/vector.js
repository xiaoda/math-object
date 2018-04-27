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
  static initVector (input) {
    return input instanceof MoVector ? input : new MoVector(input)
  }

  /* 合并矢量 */
  mergeVector (vector) {
    vector = MoVector.initVector(vector)

    return new MoVector({
      x: this.props.x + vector.props.x,
      y: this.props.y + vector.props.y,
      z: this.props.z + vector.props.z
    })
  }

  /* 获取平面内垂直的矢量 */
  getVerticalVector (axis = 'z', clockwise = true) {
    let axes = []
    let newProps = {}

    switch (axis) {
      case 'x':
        axes = ['y', 'z']
        break

      case 'y':
        axes = ['z', 'x']
        break

      case 'z':
        axes = ['x', 'y']
        break
    }

    newProps[axes[0]] = this.props[axes[1]]
    newProps[axes[1]] = this.props[axes[0]]
    newProps[axis] = this.props[axis]

    if (clockwise) newProps[axes[1]] *= -1
    else newProps[axes[0]] *= -1

    return new MoVector({
      x: newProps.x,
      y: newProps.y,
      z: newProps.z
    })
  }
}

module.exports = MoVector

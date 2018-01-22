/**
 * 线段类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoNumber = require('./number')
const MoPoint = require('./point')

class MoLineSegment extends MoBase {
  constructor (...inputs) {
    super()

    /* 默认属性 */
    this.props = {
      points: [
        {x: null, y: null, z: null}, // 起点
        {x: null, y: null, z: null}  // 终点
      ]
    }

    if (inputs[0] instanceof MoLineSegment) {
      this.setProp(inputs[0].props)
    } else if (inputs[0] instanceof MoPoint) {
      let points = inputs

      this._initLine(points)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object': {
          let {points} = inputs[0]
          this.setProp({points})
          break
        }

        case 'array': {
          let points = inputs
          this._initLine(points)
          break
        }
      }
    }
  }

  /* 初始化线段 */
  _initLine (points) {
    let pointA = new MoPoint(points[0])
    let pointB = new MoPoint(points[1])

    this.setProp({
      points: [pointA.props, pointB.props]
    })
  }

  /* 获取线段方向（向量） */
  vector () {
    let x = this.props.points[1].x.minus(this.props.points[0].x)
    let y = this.props.points[1].y.minus(this.props.points[0].y)
    let z = this.props.points[1].z.minus(this.props.points[0].z)

    return {x, y, z}
  }

  /* 获取一个平面内与线段垂直的方向 */
  verticalVector () {}

  /* 获取线段长度 */
  length () {
    return this.props.points[1].x.minus(this.props.points[0].x).power(2)
      .plus(this.props.points[1].y.minus(this.props.points[0].y).power(2))
      .plus(this.props.points[1].z.minus(this.props.points[0].z).power(2))
      .power(0.5)
  }

  /* 获取线段上的点（按比例） */
  pointOfRatio (input) {
    let ratio = new MoNumber(input)
    let x = this.props.points[0].x.multiply(new MoNumber(1).minus(ratio))
      .plus(this.props.points[1].x.multiply(ratio))
    let y = this.props.points[0].y.multiply(new MoNumber(1).minus(ratio))
      .plus(this.props.points[1].y.multiply(ratio))
    let z = this.props.points[0].z.multiply(new MoNumber(1).minus(ratio))
      .plus(this.props.points[1].z.multiply(ratio))

    return new MoPoint({x, y, z})
  }

  /* 获取线段上的点（按距离） */
  pointOfDistance (input) {}
}

module.exports = MoLineSegment

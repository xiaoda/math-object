/**
 * 直线类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoNumber = require('./number')
const MoDot = require('./dot')

class MoLine extends MoBase {
  constructor (...inputs) {
    super()

    /* 默认属性 */
    this.props = {
      slope: null,    // 斜率
      intercept: null // 截距
    }

    if (inputs[0] instanceof MoLine) {
      this.setProp(inputs[0].props)
    } else if (inputs[0] instanceof MoDot) {
      let dots = inputs

      this._initLine(dots)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object':
          let {slope, intercept} = inputs[0]
          this.setProp({slope, intercept})
          break

        case 'array':
          let dots = inputs
          this._initLine(dots)
          break
      }
    }
  }

  /* 初始化直线 */
  _initLine (dots) {
    let dotA = new MoDot(dots[0])
    let dotB = new MoDot(dots[1])

    let slope = new MoNumber(dotA.props.y)
      .minus(dotB.props.y)
      .devide(
        new MoNumber(dotA.props.x)
          .minus(dotB.props.x)
      )

    let intercept = new MoNumber(dotA.props.y).minus(new MoNumber(dotA.props.x).multiply(slope))

    this.setProp({slope, intercept})
  }

  /* 判断是否经过点 */
  throughDot (input) {
    let dot = new MoDot(input)

    return new MoNumber(dot.props.x)
      .multiply(this.props.slope)
      .add(this.props.intercept)
      .isEqual(dot.props.y)
  }

  /* 判断是否与线相交 */
  intersectLine (...inputs) {
    let line = new MoLine(...inputs)

    return this.props.slope.isNotEqual(line.props.slope)
  }

  /* 判断是否与线平行 */
  parallelLine (...inputs) {
    let line = new MoLine(...inputs)

    return (
      this.props.slope.isEqual(line.props.slope) &&
      this.props.intercept.isNotEqual(line.props.intercept)
    )
  }
}

module.exports = MoLine

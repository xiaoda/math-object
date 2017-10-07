/**
 * 直线类
 */

import MoBase from './base'
import MoNumber from './number'
import MoDot from './dot'

class MoLine extends MoBase {
  constructor (...inputs) {
    super()

    /* 默认属性 */
    this.props = {
      slope: null,    // 斜率
      intercept: null // 截距
    }

    if (inputs[0] instanceof MoLine) {
      this.setProp({
        slope: inputs[0].props.slope,
        intercept: inputs[0].props.intercept
      })
    } else if (inputs[0] instanceof MoDot) {
      let dots = inputs
      this._initLine(dots)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object':
          let props = inputs[0]
          this.setProp({
            slope: props.slope,
            intercept: props.intercept
          })
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

    let slope = new MoNumber(dotA.props.y).minus(dotB.props.y).devide(new MoNumber(dotA.props.x).minus(dotB.props.x))
    let intercept = new MoNumber(dotA.props.y).minus(new MoNumber(dotA.props.x).multiply(slope))

    this.setProp({slope, intercept})
  }
}

module.exports = MoLine

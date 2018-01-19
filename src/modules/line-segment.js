/**
 * 线段类
 */

const helper = require('../general/helper')
const MoBase = require('./base')
const MoNumber = require('./number')
const MoDot = require('./dot')

class MoLineSegment extends MoBase {
  constructor (...inputs) {
    super()

    /* 默认属性 */
    this.props = {
      dots: [
        {x: null, y: null, z: null}, // 起点
        {x: null, y: null, z: null}  // 终点
      ]
    }

    if (inputs[0] instanceof MoLineSegment) {
      this.setProp(inputs[0].props)
    } else if (inputs[0] instanceof MoDot) {
      let dots = inputs

      this._initLine(dots)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object': {
          let {dots} = inputs[0]
          this.setProp({dots})
          break
        }

        case 'array': {
          let dots = inputs
          this._initLine(dots)
          break
        }
      }
    }
  }

  /* 初始化线段 */
  _initLine (dots) {
    let dotA = new MoDot(dots[0])
    let dotB = new MoDot(dots[1])

    this.setProp({
      dots: [dotA.props, dotB.props]
    })
  }
}

module.exports = MoLineSegment

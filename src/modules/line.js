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
      orientation: {
        x: null,
        y: null,
        z: null
      },
      dot: {
        x: null,
        y: null,
        z: null
      }
    }

    if (inputs[0] instanceof MoLine) {
      this.setProp(inputs[0].props)
    } else if (inputs[0] instanceof MoDot) {
      let dots = inputs

      this._initLine(dots)
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object':
          let {orientation} = inputs[0]
          this.setProp({orientation})
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

    this.setProp({})
  }

  /* 判断是否经过点 */
  throughDot (input) {
    let dot = new MoDot(input)
  }

  /* 判断是否与线相交 */
  intersectLine (...inputs) {
    let line = new MoLine(...inputs)
  }

  /* 判断是否与线平行 */
  parallelLine (...inputs) {
    let line = new MoLine(...inputs)
  }
}

module.exports = MoLine

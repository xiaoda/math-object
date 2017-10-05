/**
 * 点类
 */

import MoBase from './base'
import MoNumber from './number'

class MoDot extends MoBase {
  constructor (input) {
    super()

    /* 默认属性 */
    this.props = {
      x: null,
      y: null,
      z: null
    }

    if (input instanceof MoDot) {
      this.setProp({
        x: input.props.x,
        y: input.props.y,
        z: input.props.z
      })
    } else {
      switch (helper.getType(input)) {
        case 'object':
          let props = input
          this.setProp({
            x: props.x,
            y: props.y,
            z: props.z
          })
          break

        case 'array':
          let [x, y, z] = input
          this._initDot(x, y, z)
          break
      }
    }
  }

  /* 初始化点 */
  _initDot (x, y, z = 1) {
    this.setProp({x, y, z})
  }
}

module.exports = MoDot

const assert = require('assert')
const Mo = require('../../../')

describe('MoVector', () => {

  describe('#constructor()', () => {
    it('object type', (done) => {
      let vector = Mo.Vector({x: 1, y: 2, z: 3})
      if (
        vector.props.x === 1 &&
        vector.props.y === 2 &&
        vector.props.z === 3
      ) done()
    })
    it('array type', (done) => {
      let vector = Mo.Vector([1, 2, 3])
      if (
        vector.props.x === 1 &&
        vector.props.y === 2 &&
        vector.props.z === 3
      ) done()
    })
  })

  describe('#mergeVector()', () => {
    it('normal', (done) => {
      let vector = Mo.Vector([1, 2, 3]).mergeVector([2, 3, 4])
      if (
        vector.props.x === 3 &&
        vector.props.y === 5 &&
        vector.props.z === 7
      ) done()
    })
  })

  describe('#getVerticalVector()', () => {
    it('in x,y plane clockwise', (done) => {
      let vector = Mo.Vector([1, 2]).getVerticalVector()
      if (
        vector.props.x === 2 &&
        vector.props.y === -1 &&
        vector.props.z === 0
      ) done()
    })
    it('in x,y plane anti-clockwise', (done) => {
      let vector = Mo.Vector([1, 2]).getVerticalVector('z', false)
      if (
        vector.props.x === -2 &&
        vector.props.y === 1 &&
        vector.props.z === 0
      ) done()
    })
  })

})

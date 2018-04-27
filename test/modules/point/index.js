const assert = require('assert')
const Mo = require('../../../')

describe('MoPoint', () => {

  describe('#constructor()', () => {
    it('object type', (done) => {
      let point = Mo.Point({x: 1, y: 2, z: 3})
      if (
        point.props.x === 1 &&
        point.props.y === 2 &&
        point.props.z === 3
      ) done()
    })
    it('array type', (done) => {
      let point = Mo.Point([1, 2, 3])
      if (
        point.props.x === 1 &&
        point.props.y === 2 &&
        point.props.z === 3
      ) done()
    })
  })

  describe('#getDistance()', () => {
    it('normal', () => {
      assert.equal(
        Mo.Point([1, 2, 3]).getDistance([2, 3, 4]),
        Math.pow(3, 0.5)
      )
    })
  })

  describe('#getPointByVector()', () => {
    it('normal', (done) => {
      let point = Mo.Point([1, 2, 3]).getPointByVector([1, 1, 0], Math.pow(2, 0.5))
      if (
        point.props.x === 2 &&
        point.props.y === 3 &&
        point.props.z === 3
      ) done()
    })
  })

  describe('#getPointByPoint()', () => {
    it('end point', (done) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], 1)
      if (
        point.props.x === 2 &&
        point.props.y === 3 &&
        point.props.z === 4
      ) done()
    })
    it('middle point', (done) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], 0.5)
      if (
        point.props.x === 1.5 &&
        point.props.y === 2.5 &&
        point.props.z === 3.5
      ) done()
    })
    it('point out of range', (done) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], -2)
      if (
        point.props.x === -1 &&
        point.props.y === 0 &&
        point.props.z === 1
      ) done()
    })
  })

  describe('#getVector()', () => {
    it('normal', (done) => {
      let vector = Mo.Point([1, 2, 3]).getVector([3, 5, 7])
      if (
        vector.props.x === 2 &&
        vector.props.y === 3 &&
        vector.props.z === 4
      ) done()
    })
  })

})
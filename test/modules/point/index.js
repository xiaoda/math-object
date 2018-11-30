const assert = require('assert')
const Mo = require('../../../')

describe('MoPoint', () => {

  describe('#constructor()', () => {
    it('object type', (done, fail) => {
      let point = Mo.Point({x: 1, y: 2, z: 3})
      if (
        point.props.x === 1 &&
        point.props.y === 2 &&
        point.props.z === 3
      ) done()
      else fail()
    })
    it('array type', (done, fail) => {
      let point = Mo.Point([1, 2, 3])
      if (
        point.props.x === 1 &&
        point.props.y === 2 &&
        point.props.z === 3
      ) done()
      else fail()
    })
  })

  describe('#getDistanceByPoint()', () => {
    it('normal', () => {
      assert.equal(
        Mo.Point([1, 2, 3]).getDistanceByPoint([2, 3, 4]),
        Math.pow(3, 0.5)
      )
    })
  })

  describe('#getPointByVector()', () => {
    it('normal', (done, fail) => {
      let point = Mo.Point([1, 2, 3]).getPointByVector([1, 1, 0], Math.pow(2, 0.5))
      if (
        point.props.x === 2 &&
        point.props.y === 3 &&
        point.props.z === 3
      ) done()
      else fail()
    })
  })

  describe('#getPointByPoint()', () => {
    it('end point', (done, fail) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], 1)
      if (
        point.props.x === 2 &&
        point.props.y === 3 &&
        point.props.z === 4
      ) done()
      else fail()
    })
    it('middle point', (done, fail) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], 0.5)
      if (
        point.props.x === 1.5 &&
        point.props.y === 2.5 &&
        point.props.z === 3.5
      ) done()
      else fail()
    })
    it('point out of range', (done, fail) => {
      let point = Mo.Point([1, 2, 3]).getPointByPoint([2, 3, 4], -2)
      if (
        point.props.x === -1 &&
        point.props.y === 0 &&
        point.props.z === 1
      ) done()
      else fail()
    })
  })

  describe('#getMiddlePointByPoint()', () => {
    it('normal', (done, fail) => {
      let point = Mo.Point([1, 2, 3]).getMiddlePointByPoint([2, 3, 4])
      if (
        point.props.x === 1.5 &&
        point.props.y === 2.5 &&
        point.props.z === 3.5
      ) done()
      else fail()
    })
  })

  describe('#getPointsBesideConnection()', () => {
    it('normal', (done, fail) => {
      let points = Mo.Point([0, 0, 0]).getPointsBesideConnection([1, 1, 0], 0.5, 0.5)
      if (
        points[0].props.x === 1 &&
        points[0].props.y === 0 &&
        points[0].props.z === 0 &&
        points[1].props.x === 0 &&
        points[1].props.y === 1 &&
        points[1].props.z === 0
      ) done()
      else fail()
    })
  })

  describe('#getPointsBesideMiddlePoint()', () => {
    it('normal', (done, fail) => {
      let points = Mo.Point([0, 0, 0]).getPointsBesideMiddlePoint([1, 1, 0], 0.5)
      if (
        points[0].props.x === 1 &&
        points[0].props.y === 0 &&
        points[0].props.z === 0 &&
        points[1].props.x === 0 &&
        points[1].props.y === 1 &&
        points[1].props.z === 0
      ) done()
      else fail()
    })
  })

  describe('#getVectorByPoint()', () => {
    it('normal', (done) => {
      let vector = Mo.Point([1, 2, 3]).getVectorByPoint([3, 5, 7])
      if (
        vector.props.x === 2 &&
        vector.props.y === 3 &&
        vector.props.z === 4
      ) done()
    })
  })

})

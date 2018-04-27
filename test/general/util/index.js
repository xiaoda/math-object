const assert = require('assert')
const xd = require('xdhelper')
const Mo = require('../../../')

describe('Util', () => {

  describe('#getOpposite()', ()  => {
    it('1 => -1', () => {
      assert.equal(
        Mo.getOpposite(1),
        -1
      )
    })
    it('-2 => 2', () => {
      assert.equal(
        Mo.getOpposite(-2),
        2
      )
    })
    it('0 => 0', () => {
      assert.equal(
        Mo.getOpposite(0),
        0
      )
    })
  })

  describe('#getReciprocal()', ()  => {
    it('1 => 1', () => {
      assert.equal(
        Mo.getReciprocal(1),
        1
      )
    })
    it('-2 => -0.5', () => {
      assert.equal(
        Mo.getReciprocal(-2),
        -0.5
      )
    })
    it('0 => infinity', () => {
      assert.equal(
        Mo.getReciprocal(0),
        Infinity
      )
    })
    it('-infinity => 0', () => {
      assert.equal(
        Mo.getReciprocal(-Infinity),
        0
      )
    })
  })

  describe('#getDivisors()', () => {
    it('30 => [2, 3, 5]', () => {
      assert.equal(
        xd.isArrEqual(Mo.getDivisors(30), [2, 3, 5]),
        true
      )
    })
    it('1 => []', () => {
      assert.equal(
        Mo.getDivisors(1).length,
        0
      )
    })
    it('infinity => []', () => {
      assert.equal(
        Mo.getDivisors(Infinity).length,
        0
      )
    })
  })

  describe('#getGreatestCommonDivisor()', () => {
    it('30, 45, 75 => 15', () => {
      assert.equal(
        Mo.getGreatestCommonDivisor(30, 45, 75),
        15
      )
    })
    it('2, 3 => 1', () => {
      assert.equal(
        Mo.getGreatestCommonDivisor(2, 3),
        1
      )
    })
    it('2, infinity => 2', () => {
      assert.equal(
        Mo.getGreatestCommonDivisor(2, Infinity),
        2
      )
    })
  })

  describe('#getLeastCommonMultiple()', () => {
    it('6, 8, 10 => 120', () => {
      assert.equal(
        Mo.getLeastCommonMultiple(6, 8, 10),
        120
      )
    })
    it('1, 1 => 1', () => {
      assert.equal(
        Mo.getLeastCommonMultiple(1, 1),
        1
      )
    })
    it('2, infinity => infinity', () => {
      assert.equal(
        Mo.getLeastCommonMultiple(2, Infinity),
        Infinity
      )
    })
  })

})

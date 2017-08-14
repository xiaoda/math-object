const assert = require('assert')
const mo = require('../../../dist')
const data = require('./data')

describe('mo.fraction', () => {

  describe('object params', () => {
    data.objList.forEach((item) => {
      it(item.type, () => {
        let fraction = mo.fraction(item.input)
        assert.equal(
          fraction.props.sign,
          item.expect.props.sign
        )
        assert.equal(
          fraction.props.numerator,
          item.expect.props.numerator
        )
        assert.equal(
          fraction.props.denominator,
          item.expect.props.denominator
        )
      })
    })
  })

  describe('object params', () => {
    data.numList.forEach((item) => {
      it(item.type, () => {
        let fraction = mo.fraction(...item.input)
        assert.equal(
          fraction.props.sign,
          item.expect.props.sign
        )
        assert.equal(
          fraction.props.numerator,
          item.expect.props.numerator
        )
        assert.equal(
          fraction.props.denominator,
          item.expect.props.denominator
        )
      })
    })
  })

})

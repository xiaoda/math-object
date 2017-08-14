const assert = require('assert')
const mo = require('../../../dist')
const data = require('./data')

describe('mo.Number', () => {

  describe('#constructor()', () => {
    data.list.forEach((item) => {
      it(item.type, () => {
        let num = new mo.Number(item.input)
        assert.equal(
          num.props.sign,
          item.expect.props.sign
        )
        assert.equal(
          num.props.numerator,
          item.expect.props.numerator
        )
        assert.equal(
          num.props.denominator,
          item.expect.props.denominator
        )
      })
    })
  })

  data.funcs.valueReturn.forEach((func) => {
    describe(`#${func}()`, () => {
      data.list.forEach((item) => {
        it(item.type, () => {
          let num = new mo.Number(item.input)
          assert.equal(
            num[func](),
            item.expect[func]
          )
        })
      })
    })
  })

  data.funcs.instanceReturn.forEach((func) => {
    describe(`#${func}()`, () => {
      data.list.forEach((item) => {
        it(item.type, () => {
          let num = new mo.Number(item.input)
          assert.equal(
            num[func]().getVal(),
            item.expect[func]
          )
        })
      })
    })
  })

  data.funcs.operation.forEach((func) => {
    describe(`#${func}()`, () => {
      data.list.forEach((item) => {
        it(item.type, () => {
          let num = new mo.Number(item.input)
          assert.equal(
            num[func](num).getVal(),
            item.expect[`${func}Self`]
          )
        })
      })
    })
  })

  describe(`#power()`, () => {
    data.list.forEach((item) => {
      it(item.type, () => {
        let num = new mo.Number(item.input)
        assert.equal(
          num.power(3).getVal(),
          item.expect.power3
        )
      })
    })
  })

})

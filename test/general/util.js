let assert = require('assert')
let mo = require('../../dist')

describe('util', function () {

  describe('#parseNum()', function () {
    it('number to number', function () {
      assert.equal(
        mo.parseNum(1.23),
        1.23
      )
    })

    it('string to number', function () {
      assert.equal(
        mo.parseNum('1.23'),
        1.23
      )
    })

    it('string with space to number', function () {
      assert.equal(
        mo.parseNum('  1  .  2  3  '),
        1.23
      )
    })
  })

  describe('#parseNumStr()', function () {
    it('number to string', function () {
      assert.equal(
        mo.parseNumStr(1.23),
        '1.23'
      )
    })

    it('string to string', function () {
      assert.equal(
        mo.parseNumStr('1.23'),
        '1.23'
      )
    })

    it('string with space to string', function () {
      assert.equal(
        mo.parseNumStr('  1  .  2  3  '),
        '1.23'
      )
    })
  })

  describe('#checkNumLegal()', function () {
    it('legal negative number', function () {
      assert.equal(
        mo.checkNumLegal(-1.23),
        true
      )
    })

    it('legal positive string with sign', function () {
      assert.equal(
        mo.checkNumLegal('+1.23'),
        true
      )
    })

    it('legal string with space', function () {
      assert.equal(
        mo.checkNumLegal('  1  .  2  3  '),
        true
      )
    })

    it('illegal string with charactor', function () {
      assert.equal(
        mo.checkNumLegal('1A23'),
        false
      )
    })
  })

  describe('#signStrToNum()', function () {
    it('positive', function () {
      assert.equal(
        mo.signStrToNum('positive'),
        1
      )
    })

    it('negative', function () {
      assert.equal(
        mo.signStrToNum('negative'),
        -1
      )
    })

    it('zero', function () {
      assert.equal(
        mo.signStrToNum('zero'),
        0
      )
    })
  })

  describe('#signNumToStr()', function () {
    it('1', function () {
      assert.equal(
        mo.signNumToStr(1),
        'positive'
      )
    })

    it('-1', function () {
      assert.equal(
        mo.signNumToStr(-1),
        'negative'
      )
    })

    it('0', function () {
      assert.equal(
        mo.signNumToStr(0),
        'zero'
      )
    })
  })

  describe('#getSign()', function () {
    it('positive', function () {
      assert.equal(
        mo.getSign(1.23),
        'positive'
      )
    })

    it('negative', function () {
      assert.equal(
        mo.getSign(-1.23),
        'negative'
      )
    })

    it('zero', function () {
      assert.equal(
        mo.getSign(0),
        'zero'
      )
    })
  })

  describe('#getNumsSign()', function () {
    it('1 positive, 1 negative', function () {
      assert.equal(
        mo.getNumsSign(1.23, -1.23),
        'negative'
      )
    })

    it('2 negative', function () {
      assert.equal(
        mo.getNumsSign(-1.23, -2.34),
        'positive'
      )
    })

    it('3 negative', function () {
      assert.equal(
        mo.getNumsSign(-1.23, -2.34, -3.45),
        'negative'
      )
    })
  })

  describe('#dropSign()', function () {
    it('negative number', function () {
      assert.equal(
        mo.dropSign(-1.23),
        1.23
      )
    })
  })

  describe('#isZero()', function () {
    it('zero', function () {
      assert.equal(
        mo.isZero(0),
        true
      )
    })

    it('positive number', function () {
      assert.equal(
        mo.isZero(1.23),
        false
      )
    })

    it('negative number', function () {
      assert.equal(
        mo.isZero(-1.23),
        false
      )
    })
  })

  describe('#isPositive()', function () {
    it('zero', function () {
      assert.equal(
        mo.isPositive(0),
        false
      )
    })

    it('positive number', function () {
      assert.equal(
        mo.isPositive(1.23),
        true
      )
    })

    it('negative number', function () {
      assert.equal(
        mo.isPositive(-1.23),
        false
      )
    })
  })

  describe('#isNegative()', function () {
    it('zero', function () {
      assert.equal(
        mo.isNegative(0),
        false
      )
    })

    it('positive number', function () {
      assert.equal(
        mo.isNegative(1.23),
        false
      )
    })

    it('negative number', function () {
      assert.equal(
        mo.isNegative(-1.23),
        true
      )
    })
  })

  describe('#isInteger()', function () {
    it('integer', function () {
      assert.equal(
        mo.isInteger(123),
        true
      )
    })

    it('decimal', function () {
      assert.equal(
        mo.isInteger(1.23),
        false
      )
    })
  })

  describe('#isDecimal()', function () {
    it('integer', function () {
      assert.equal(
        mo.isDecimal(123),
        false
      )
    })

    it('decimal', function () {
      assert.equal(
        mo.isDecimal(1.23),
        true
      )
    })
  })

  describe('#getDecimalDigit()', function () {
    it('integer', function () {
      assert.equal(
        mo.getDecimalDigit(123),
        0
      )
    })

    it('decimal', function () {
      assert.equal(
        mo.getDecimalDigit(1.23),
        2
      )
    })
  })

  describe('#getDivisor()', function () {
    it('60', function () {
      assert.equal(
        JSON.stringify(mo.getDivisor(60)),
        JSON.stringify([2, 2, 3, 5])
      )
    })
  })

  describe('#getGreatestCommonDivisor()', function () {
    it('30, 45, 75', function () {
      assert.equal(
        JSON.stringify(mo.getGreatestCommonDivisor([30, 45, 75])),
        15
      )
    })
  })

  describe('#getLowestCommonMultiple()', function () {
    it('6, 8, 10', function () {
      assert.equal(
        JSON.stringify(mo.getLowestCommonMultiple([6, 8, 10])),
        120
      )
    })
  })

})

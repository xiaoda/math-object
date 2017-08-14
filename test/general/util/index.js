const assert = require('assert')
const mo = require('../../../dist')

describe('util', () => {

  describe('#parseNum()', () => {
    it('number to number', () => {
      assert.equal(
        mo.parseNum(1.23),
        1.23
      )
    })

    it('string to number', () => {
      assert.equal(
        mo.parseNum('1.23'),
        1.23
      )
    })

    it('string with space to number', () => {
      assert.equal(
        mo.parseNum('  1  .  2  3  '),
        1.23
      )
    })
  })

  describe('#parseNumStr()', () => {
    it('number to string', () => {
      assert.equal(
        mo.parseNumStr(1.23),
        '1.23'
      )
    })

    it('string to string', () => {
      assert.equal(
        mo.parseNumStr('1.23'),
        '1.23'
      )
    })

    it('string with space to string', () => {
      assert.equal(
        mo.parseNumStr('  1  .  2  3  '),
        '1.23'
      )
    })
  })

  describe('#checkNumLegal()', () => {
    it('legal negative number', () => {
      assert.equal(
        mo.checkNumLegal(-1.23),
        true
      )
    })

    it('legal positive string with sign', () => {
      assert.equal(
        mo.checkNumLegal('+1.23'),
        true
      )
    })

    it('legal string with space', () => {
      assert.equal(
        mo.checkNumLegal('  1  .  2  3  '),
        true
      )
    })

    it('illegal string with charactor', () => {
      assert.equal(
        mo.checkNumLegal('1A23'),
        false
      )
    })
  })

  describe('#signStrToNum()', () => {
    it('positive', () => {
      assert.equal(
        mo.signStrToNum('positive'),
        1
      )
    })

    it('negative', () => {
      assert.equal(
        mo.signStrToNum('negative'),
        -1
      )
    })

    it('zero', () => {
      assert.equal(
        mo.signStrToNum('zero'),
        0
      )
    })
  })

  describe('#signNumToStr()', () => {
    it('1', () => {
      assert.equal(
        mo.signNumToStr(1),
        'positive'
      )
    })

    it('-1', () => {
      assert.equal(
        mo.signNumToStr(-1),
        'negative'
      )
    })

    it('0', () => {
      assert.equal(
        mo.signNumToStr(0),
        'zero'
      )
    })
  })

  describe('#getSign()', () => {
    it('positive', () => {
      assert.equal(
        mo.getSign(1.23),
        'positive'
      )
    })

    it('negative', () => {
      assert.equal(
        mo.getSign(-1.23),
        'negative'
      )
    })

    it('zero', () => {
      assert.equal(
        mo.getSign(0),
        'zero'
      )
    })
  })

  describe('#getNumsSign()', () => {
    it('1 positive, 1 negative', () => {
      assert.equal(
        mo.getNumsSign(1.23, -1.23),
        'negative'
      )
    })

    it('2 negative', () => {
      assert.equal(
        mo.getNumsSign(-1.23, -2.34),
        'positive'
      )
    })

    it('3 negative', () => {
      assert.equal(
        mo.getNumsSign(-1.23, -2.34, -3.45),
        'negative'
      )
    })
  })

  describe('#dropSign()', () => {
    it('negative number', () => {
      assert.equal(
        mo.dropSign(-1.23),
        1.23
      )
    })
  })

  describe('#isZero()', () => {
    it('zero', () => {
      assert.equal(
        mo.isZero(0),
        true
      )
    })

    it('positive number', () => {
      assert.equal(
        mo.isZero(1.23),
        false
      )
    })

    it('negative number', () => {
      assert.equal(
        mo.isZero(-1.23),
        false
      )
    })
  })

  describe('#isPositive()', () => {
    it('zero', () => {
      assert.equal(
        mo.isPositive(0),
        false
      )
    })

    it('positive number', () => {
      assert.equal(
        mo.isPositive(1.23),
        true
      )
    })

    it('negative number', () => {
      assert.equal(
        mo.isPositive(-1.23),
        false
      )
    })
  })

  describe('#isNegative()', () => {
    it('zero', () => {
      assert.equal(
        mo.isNegative(0),
        false
      )
    })

    it('positive number', () => {
      assert.equal(
        mo.isNegative(1.23),
        false
      )
    })

    it('negative number', () => {
      assert.equal(
        mo.isNegative(-1.23),
        true
      )
    })
  })

  describe('#isInteger()', () => {
    it('integer', () => {
      assert.equal(
        mo.isInteger(123),
        true
      )
    })

    it('decimal', () => {
      assert.equal(
        mo.isInteger(1.23),
        false
      )
    })
  })

  describe('#isDecimal()', () => {
    it('integer', () => {
      assert.equal(
        mo.isDecimal(123),
        false
      )
    })

    it('decimal', () => {
      assert.equal(
        mo.isDecimal(1.23),
        true
      )
    })
  })

  describe('#getDecimalDigit()', () => {
    it('integer', () => {
      assert.equal(
        mo.getDecimalDigit(123),
        0
      )
    })

    it('decimal', () => {
      assert.equal(
        mo.getDecimalDigit(1.23),
        2
      )
    })
  })

  describe('#getDivisor()', () => {
    it('60', () => {
      assert.equal(
        JSON.stringify(mo.getDivisor(60)),
        JSON.stringify([2, 2, 3, 5])
      )
    })
  })

  describe('#getGreatestCommonDivisor()', () => {
    it('30, 45, 75', () => {
      assert.equal(
        mo.getGreatestCommonDivisor([30, 45, 75]),
        15
      )
    })

    it('1, 2, 3', () => {
      assert.equal(
        mo.getGreatestCommonDivisor([1, 2, 3]),
        1
      )
    })
  })

  describe('#getLowestCommonMultiple()', () => {
    it('6, 8, 10', () => {
      assert.equal(
        mo.getLowestCommonMultiple([6, 8, 10]),
        120
      )
    })

    it('1, 2, 3', () => {
      assert.equal(
        mo.getLowestCommonMultiple([1, 2, 3]),
        6
      )
    })
  })

})

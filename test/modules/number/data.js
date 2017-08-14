const funcs = {
  valueReturn: ['getVal', 'isPositive', 'isNegative', 'isZero', 'isInteger', 'isDecimal'],
  instanceReturn: ['getAbsoluteVal', 'getOppositeNum', 'getReciprocal'],
  operation: ['add', 'minus', 'multiply', 'devide']
}

const list = [
  {
    type: 'positive integer',
    input: 10,
    expect: {
      props: {
        sign: 'positive',
        numerator: 10,
        denominator: 1
      },
      getVal: 10,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: true,
      isDecimal: false,
      getAbsoluteVal: 10,
      getOppositeNum: -10,
      getReciprocal: 0.1,
      addSelf: 20,
      minusSelf: 0,
      multiplySelf: 100,
      devideSelf: 1,
      power3: 1000,
    }
  },
  {
    type: 'positive decimal',
    input: 0.1,
    expect: {
      props: {
        sign: 'positive',
        numerator: 1,
        denominator: 10
      },
      getVal: 0.1,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      getAbsoluteVal: 0.1,
      getOppositeNum: -0.1,
      getReciprocal: 10,
      addSelf: 0.2,
      minusSelf: 0,
      multiplySelf: 0.01,
      devideSelf: 1,
      power3: 0.001
    }
  },
  {
    type: 'positive fraction',
    input: {
      sign: 'positive',
      numerator: 10,
      denominator: 100
    },
    expect: {
      props: {
        sign: 'positive',
        numerator: 1,
        denominator: 10
      },
      getVal: 0.1,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      getAbsoluteVal: 0.1,
      getOppositeNum: -0.1,
      getReciprocal: 10,
      addSelf: 0.2,
      minusSelf: 0,
      multiplySelf: 0.01,
      devideSelf: 1,
      power3: 0.001
    }
  },
  {
    type: 'negative integer',
    input: -10,
    expect: {
      props: {
        sign: 'negative',
        numerator: 10,
        denominator: 1
      },
      getVal: -10,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: true,
      isDecimal: false,
      getAbsoluteVal: 10,
      getOppositeNum: 10,
      getReciprocal: -0.1,
      addSelf: -20,
      minusSelf: 0,
      multiplySelf: 100,
      devideSelf: 1,
      power3: -1000,
    }
  },
  {
    type: 'negative decimal',
    input: -0.1,
    expect: {
      props: {
        sign: 'negative',
        numerator: 1,
        denominator: 10
      },
      getVal: -0.1,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      getAbsoluteVal: 0.1,
      getOppositeNum: 0.1,
      getReciprocal: -10,
      addSelf: -0.2,
      minusSelf: 0,
      multiplySelf: 0.01,
      devideSelf: 1,
      power3: -0.001
    }
  },
  {
    type: 'negative fraction',
    input: {
      sign: 'negative',
      numerator: 0.01,
      denominator: 0.1
    },
    expect: {
      props: {
        sign: 'negative',
        numerator: 1,
        denominator: 10
      },
      getVal: -0.1,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      getAbsoluteVal: 0.1,
      getOppositeNum: 0.1,
      getReciprocal: -10,
      addSelf: -0.2,
      minusSelf: 0,
      multiplySelf: 0.01,
      devideSelf: 1,
      power3: -0.001
    }
  },
  {
    type: 'zero',
    input: 0,
    expect: {
      props: {
        sign: 'zero',
        numerator: 0,
        denominator: 1
      },
      getVal: 0,
      isPositive: false,
      isNegative: false,
      isZero: true,
      isInteger: true,
      isDecimal: false,
      getAbsoluteVal: 0,
      getOppositeNum: 0,
      getReciprocal: 0,
      addSelf: 0,
      minusSelf: 0,
      multiplySelf: 0,
      devideSelf: 0,
      power3: 0
    }
  },
]

module.exports = {funcs, list}

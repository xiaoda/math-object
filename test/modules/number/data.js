const funcs = {
  valueReturn: ['val', 'isPositive', 'isNegative', 'isZero', 'isInteger', 'isDecimal'],
  instanceReturn: ['absolute', 'opposite', 'reciprocal'],
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
      val: 10,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: true,
      isDecimal: false,
      'isEqualTo0.1': false,
      absolute: 10,
      opposite: -10,
      reciprocal: 0.1,
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
      val: 0.1,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      'isEqualTo0.1': true,
      absolute: 0.1,
      opposite: -0.1,
      reciprocal: 10,
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
      val: 0.1,
      isPositive: true,
      isNegative: false,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      'isEqualTo0.1': true,
      absolute: 0.1,
      opposite: -0.1,
      reciprocal: 10,
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
      val: -10,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: true,
      isDecimal: false,
      'isEqualTo0.1': false,
      absolute: 10,
      opposite: 10,
      reciprocal: -0.1,
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
      val: -0.1,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      'isEqualTo0.1': false,
      absolute: 0.1,
      opposite: 0.1,
      reciprocal: -10,
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
      val: -0.1,
      isPositive: false,
      isNegative: true,
      isZero: false,
      isInteger: false,
      isDecimal: true,
      'isEqualTo0.1': false,
      absolute: 0.1,
      opposite: 0.1,
      reciprocal: -10,
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
      val: 0,
      isPositive: false,
      isNegative: false,
      isZero: true,
      isInteger: true,
      isDecimal: false,
      'isEqualTo0.1': false,
      absolute: 0,
      opposite: 0,
      reciprocal: Infinity,
      addSelf: 0,
      minusSelf: 0,
      multiplySelf: 0,
      power3: 0
    }
  },
]

module.exports = {funcs, list}

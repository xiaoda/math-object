const objList = [
  {
    type: 'positive fraction',
    input: {
      sign: 'positive',
      numerator: 10,
      denominator: 20
    },
    expect: {
      props: {
        sign: 'positive',
        numerator: 1,
        denominator: 2
      }
    }
  },
  {
    type: 'negative fraction',
    input: {
      sign: 'negative',
      numerator: 1.5,
      denominator: 2.5
    },
    expect: {
      props: {
        sign: 'negative',
        numerator: 3,
        denominator: 5
      }
    }
  }
]

const numList = [
  {
    type: 'positive fraction',
    input: [10, 20],
    expect: {
      props: {
        sign: 'positive',
        numerator: 1,
        denominator: 2
      }
    }
  },
  {
    type: 'negative fraction',
    input: [-1.5, 2.5],
    expect: {
      props: {
        sign: 'negative',
        numerator: 3,
        denominator: 5
      }
    }
  }
]

module.exports = {objList, numList}

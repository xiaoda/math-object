/**
 * 功能方法
 */

const helper = require('./helper')

const util = {

  /* 获取相反数 */
  getOpposite (input) {
    return helper.toNum(input) * -1
  },

  /* 获取倒数 */
  getReciprocal (input) {
    return 1 / helper.toNum(input)
  },

  /* 获取因数 */
  getDivisors (input) {
    let num = Math.abs(helper.toNum(input))
    let divisors = []
    let i = 2

    if (Number.isFinite(input)) {
      while (i <= num) {
        // 第五百个质数：3571
        if (i > 3571) {
          divisors.push(num)
          break
        } else if (i === num) {
          divisors.push(i)
          break
        }

        if (num % i === 0) {
          divisors.push(i)
          num /= i
        } else {
          i++
        }
      }
    }

    return divisors
  },

  /* 获取最大公因数 */
  getGreatestCommonDivisor (...inputs) {
    if (helper.isArr(inputs[0])) inputs = inputs[0]

    let divisors = inputs.filter((num) => Number.isFinite(num)).map((num) => this.getDivisors(num))
    let commonDivisors = []

    helper.intersectArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      commonDivisors.push(...new Array(Math.min(...counts)).fill(num))
    })

    return commonDivisors.length ? commonDivisors.reduce((sum, val) => sum * val) : 1
  },

  /* 获取最小公倍数 */
  getLeastCommonMultiple (...inputs) {
    if (helper.isArr(inputs[0])) inputs = inputs[0]
    if (inputs.findIndex((num) => !Number.isFinite(num)) > -1) return Infinity

    let divisors = inputs.map((num) => this.getDivisors(num))
    let allDivisors = []

    helper.unionArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      allDivisors.push(...new Array(Math.max(...counts)).fill(num))
    })

    return allDivisors.length ? allDivisors.reduce((sum, val) => sum * val) : 1
  }
}

module.exports = util

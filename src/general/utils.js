/**
 * 功能方法
 */

const helper = require('./helper')

const utils = {

  /* 获取相反数 */
  getOpposite (num) {
    return helper.toNum(num) * -1
  },

  /* 获取倒数 */
  getReciprocal (num) {
    return 1 / helper.toNum(num)
  },

  /* 获取因数 */
  getDivisors (num) {
    num = Math.abs(helper.toNum(num))
    let divisors = []
    let i = 2

    if (Number.isFinite(num)) {
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
  getGreatestCommonDivisor (...nums) {
    if (helper.isArr(nums[0])) nums = nums[0]

    let divisors = nums.filter((num) => Number.isFinite(num)).map((num) => this.getDivisors(num))
    let commonDivisors = []

    helper.intersectArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      commonDivisors.push(...new Array(Math.min(...counts)).fill(num))
    })

    return commonDivisors.length ? commonDivisors.reduce((sum, val) => sum * val) : 1
  },

  /* 获取最小公倍数 */
  getLeastCommonMultiple (...nums) {
    if (helper.isArr(nums[0])) nums = nums[0]
    if (nums.findIndex((num) => !Number.isFinite(num)) > -1) return Infinity

    let divisors = nums.map((num) => this.getDivisors(num))
    let allDivisors = []

    helper.unionArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      allDivisors.push(...new Array(Math.max(...counts)).fill(num))
    })

    return allDivisors.length ? allDivisors.reduce((sum, val) => sum * val) : 1
  }
}

module.exports = utils

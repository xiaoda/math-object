/**
 * 功能方法
 */

/* 正则规则 */
const rules = {
  number: /^[+-]?[\d\s]+\.?[\d\s]*$/, // 数字
  zero: /^[+-]?0$/,                   // 零
  positive: /^\+?[^-]/,               // 正数
  negative: /^-/,                     // 负数
  sign: /^[+-]?/,                     // 符号
  decimal: /\./,                      // 小数
  decimalDigit: /\.(\d+)/             // 小数位数
}

/* 符号对应关系 */
const signStrNumMap = {
  positive: 1,
  negative: -1,
  zero: 0
}

const util = {

  /* 将输入数字转化为数字类型 */
  parseNum (inputNum) {
    let num
    switch (helper.getType(inputNum)) {
      case 'number':
        num = inputNum
        break
      case 'string':
        num = helper.toNum(inputNum.replace(/\s/g, ''))
        break
    }
    return num
  },

  /* 将输入数字转化为字符串类型 */
  parseNumText (inputNum) {
    return helper.toStr(this.parseNum(inputNum))
  },

  /* 检查数字是否合法 */
  checkNumLegal (inputNum) {
    let numText = this.parseNumText(inputNum)
    return rules.number.test(numText)
  },

  /* 获取符号对应数字 */
  signStrToNum (inputStr) {
    return signStrNumMap[inputStr]
  },

  /* 获取符号对应字符串 */
  signNumToStr (inputNum) {
    let num = this.parseNum(inputNum)
    let targetStr
    helper.forEachObj(signStrNumMap, (signNum, signStr) => {
      if (num === signNum) targetStr = signStr
    })
    return targetStr
  },

  /* 判断符号：零、正、负 */
  getSign (inputNum) {
    let numText = this.parseNumText(inputNum)
    if (rules.zero.test(numText)) {
      return 'zero'
    } else if (rules.positive.test(numText)) {
      return 'positive'
    } else if (rules.negative.test(numText)) {
      return 'negative'
    }
  },

  /* 判断多个数字合并后的符号 */
  getNumsSign (...inputNums) {
    if (helper.isArr(inputNums[0])) inputNums = inputNums[0]
    let sign
    let signs = inputNums.map((inputNum) => this.getSign(inputNum))
    if (signs.includes('zero')) sign = 'zero'
    else sign = this.signNumToStr(helper.multiply(1, -1, helper.countArrItem(signs, 'negative')))
    return sign
  },

  /* 去掉符号 */
  dropSign (inputNum) {
    let numText = this.parseNumText(inputNum)
    return helper.toNum(numText.replace(rules.sign, ''))
  },

  /* 判断是否为零 */
  isZero (inputNum) {
    let numText = this.parseNumText(inputNum)
    return this.getNumSign(numText) === 'zero'
  },

  /* 判断是否为正 */
  isPositive (inputNum) {
    let numText = this.parseNumText(inputNum)
    return this.getNumSign(numText) === 'positive'
  },

  /* 判断是否为负 */
  isNegative (inputNum) {
    let numText = this.parseNumText(inputNum)
    return this.getNumSign(numText) === 'negative'
  },

  /* 判断是否为小数 */
  isDecimal (inputNum) {
    let numText = this.parseNumText(inputNum)
    return rules.decimal.test(numText)
  },

  /* 获取小数位数 */
  getDecimalDigit (inputNum) {
    let numText = this.parseNumText(inputNum)
    let match = numText.match(rules.decimalDigit)
    return helper.toBool(match) ? match[1].length : 0
  },

  /* 获取因数 */
  getDivisor (inputNum) {
    let num = this.parseNum(inputNum)
    let divisor = []
    let i = 2
    while (i <= num) {
      if (i === num) {
        divisor.push(i)
        i++
      } else if (num % i === 0) {
        divisor.push(i)
        num /= i
      } else {
        i++
      }
    }
    return divisor
  },

  /* 获取最大公因数（公约数） */
  getGreatestCommonDivisor (...inputNums) {
    if (helper.isArr(inputNums[0])) inputNums = inputNums[0]
    let divisors = inputNums.map((inputNum) => {
      return this.parseNum(inputNum)
    }).map((num) => {
      return this.getDivisor(num)
    })
    let commonDivisors = []
    helper.intersectArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      commonDivisors.push(...new Array(Math.min(...counts)).fill(num))
    })
    return commonDivisors.length ? commonDivisors.reduce((sum, val) => sum * val) : 1
  },

  /* 获取最小公倍数 */
  getLowestCommonMultiple (...inputNums) {
    if (helper.isArr(inputNums[0])) inputNums = inputNums[0]
    let divisors = inputNums.map((inputNum) => {
      return this.parseNum(inputNum)
    }).map((num) => {
      return this.getDivisor(num)
    })
    let allDivisors = []
    helper.unionArr(...divisors).forEach((num) => {
      let counts = divisors.map((arr) => helper.countArrItem(arr, num))
      allDivisors.push(...new Array(Math.max(...counts)).fill(num))
    })
    return allDivisors.length ? allDivisors.reduce((sum, val) => sum * val) : 1
  }
}

module.exports = util

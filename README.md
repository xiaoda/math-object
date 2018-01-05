# Math Object

本项目试图用对象表示数学中的数、点、线等，并进行运算。

## Modules

### Number

``` js
let numA = mo(10) // 10
let numB = mo.fraction(-5, 2) // -2.5

/* 正 or 负 */
numA.isPositive() // true
numA.isNegative() // false
numB.isPositive() // false
numB.isNegative() // true

/* 整数 or 分数 */
numA.isInteger() // true
numA.isDecimal() // false
numB.isInteger() // false
numB.isDecimal() // true

/* 绝对值 */
numA.absolute().val() // 10
numB.absolute().val() // 2.5

/* 相反数 */
numA.opposite().val() // -10
numB.opposite().val() // 2.5

/* 倒数 */
numA.reciprocal().val() // 0.1
numB.reciprocal().val() // -0.4

/* 四则运算 */
numA.add(numB).val() // 7.5
numA.minus(numB).val() // 12.5
numA.multiply(numB).val() // -25
numA.devide(numB).val() // -4
```

### Dot

``` js
let dot = mo.Dot(1, 2)
```

### Line

# Math Object

本项目试图用对象表示数学中的数、点、线段等，并进行运算。

## Modules

### Number（数）

``` js
let numA = Mo(10) // 10
let numB = Mo.fraction(-5, 2) // -2.5

/* 正数 or 负数 */
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
numA.plus(numB).val() // 7.5
numA.minus(numB).val() // 12.5
numA.multiply(numB).val() // -25
numA.devide(numB).val() // -4
```

### Point（点）

``` js
let point = Mo.Point(1, 2)
```

### Line Segment（线段）

``` js
let lineSegment = Mo.LineSegment([1, 2], [3, 4])
```

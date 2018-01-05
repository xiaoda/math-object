# math object

本项目试图用对象表示数学中的数、点、线等，并进行运算。

## Modules

### Number（数）

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
numA.getAbsoluteVal().getVal() // 10
numB.getAbsoluteVal().getVal() // 2.5

/* 相反数 */
numA.getOppositeNum().getVal() // -10
numB.getOppositeNum().getVal() // 2.5

/* 倒数 */
numA.getReciprocal().getVal() // 0.1
numB.getReciprocal().getVal() // -0.4

/* 四则运算 */
numA.add(numB).getVal() // 7.5
numA.minus(numB).getVal() // 12.5
numA.multiply(numB).getVal() // -25
numA.devide(numB).getVal() // -4
```

### Dot（点）

``` js
let dot = mo.Dot(1, 2)
```

### Line（线）

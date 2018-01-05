const mo = require('../src')
const c = (something) => console.log(something)
const end = () => c('-'.repeat(10))

let numA = mo(10)
let numB = mo.fraction(-5, 2)

c(numA.isPositive())
c(numA.isNegative())
c(numB.isPositive())
c(numB.isNegative())

end()

c(numA.isInteger())
c(numA.isDecimal())
c(numB.isInteger())
c(numB.isDecimal())

end()

c(numA.getAbsoluteVal().getVal())
c(numB.getAbsoluteVal().getVal())

end()

c(numA.getOppositeNum().getVal())
c(numB.getOppositeNum().getVal())

end()

c(numA.getReciprocal().getVal())
c(numB.getReciprocal().getVal())

end()

c(numA.add(numB).getVal())
c(numA.minus(numB).getVal())
c(numA.multiply(numB).getVal())
c(numA.devide(numB).getVal())

end()

let dot = mo.Dot(1, 2)

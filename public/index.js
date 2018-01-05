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

c(numA.absolute().val())
c(numB.absolute().val())

end()

c(numA.opposite().val())
c(numB.opposite().val())

end()

c(numA.reciprocal().val())
c(numB.reciprocal().val())

end()

c(numA.add(numB).val())
c(numA.minus(numB).val())
c(numA.multiply(numB).val())
c(numA.devide(numB).val())

end()

let dot = mo.Dot(1, 2)

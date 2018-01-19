const Mo = require('../src')
const c = (something) => console.log(something)
const end = () => c('-'.repeat(10))

//*/

let line = Mo.LineSegment([1, 2], [3, 4])

console.log(line)

/*/

let numA = Mo(10)
let numB = Mo.fraction(-5, 2)

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

let dot = Mo.Dot(1, 2)

//*/

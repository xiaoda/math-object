const Mo = require('../src')

let test = Mo.Point([1, 2, 3]).getPointByVector([1, 1, 0], Math.pow(2, 0.5))

console.log(test)

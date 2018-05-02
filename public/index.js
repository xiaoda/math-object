const Mo = require('../src')

let test = Mo.Point([0, 0, 0]).getPointsBesideConnection([1, 1, 0], 0.5, 0.5)

console.log(test)

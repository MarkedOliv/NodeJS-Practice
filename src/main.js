// Understanding import/require

const { myWebAddress, myEmail, myName } = require("./module/myModule");

console.log(myWebAddress, myEmail, myName);


// Require math
const math = require('./module/math/index');

console.log(math.add(10, 10));
console.log(math.subtract(10, 10));
console.log(math.multiply(10, 10));
console.log(math.divide(10, 10));
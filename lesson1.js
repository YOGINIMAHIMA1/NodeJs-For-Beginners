const os= require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log('Hello World')
console.log(__dirname);
console.log(__filename);
const path= require('path')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
/*const math= require('./math.js')
console.log(math.add(4,2)); */
// anoter way of doing this is destructuring
//
 const {add,subtract,multiply,divide}= require('./math')
 console.log(add(4,2))
 console.log(subtract(5,3));
 console.log(divide(8,3))
 console.log(multiply(7,3));

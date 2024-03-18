console.log(global);
const os =require('os')
const path= require('path')
console.log(os.homedir());
console.log(os.version());
console.log(os.type());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename))
var fs = require('fs');
var filename = process.argv[2];
var buf = fs.readFileSync(filename);
str = buf.toString();
console.log(str.split('\n').length -1);
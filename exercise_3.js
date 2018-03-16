var fs = require('fs')
var cadena = fs.readFileSync('NodeSchool/test.txt').toString().split('\n')

console.log(cadena.length-1)


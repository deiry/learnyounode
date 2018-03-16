cadena = process.argv
var num,sum = 0
cadena.splice(0,2)
for(var i in cadena){
num = Number(cadena[i])
sum+= num	

}
console.log(sum)


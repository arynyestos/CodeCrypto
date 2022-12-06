var moment = require("moment");
var ahora = moment.now();
var fechaDeHoy = moment(ahora);
console.log(ahora);
console.log(fechaDeHoy.toString());

var texto = "0123456789";
console.log(texto.substring(3,5))
console.log(texto.substring(3))

var a = 33;
var b = 10;
var c = a + b;
console.log(c)

if (a==b){
    console.log("son iguales");
} else{
    console.log("no son iguales");
}

for (var i = 0; i < 5; i++){
    console.log(i)
}

function calcularAreaCirculo(radio){
    var area = Math.PI * radio ** 2;
    return area;
}

console.log(calcularAreaCirculo(5))

//función flecha:
const calcularAreaCirculo2 = (radio) => Math.PI * radio ** 2;
console.log(calcularAreaCirculo2(5))

var lista = [1,2,3,4,5,6,7,8,9,10];
var nuevaLista = lista.filter(function(numero){
    return numero % 2 == 0;
})
console.log(nuevaLista)

var impares = lista.filter((numero) =>{
    return numero % 2 != 0;
})
console.log(impares)
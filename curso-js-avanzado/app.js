var obj1 = {a:12}
console.log(obj1)
obj2 = obj1
console.log(obj2)
obj2.b = 98
console.log(obj1)
console.log(obj2['a'])
console.log(JSON.stringify(obj1), obj1)

cadena = '{"a":2}'
objeto = JSON.parse(cadena)
console.log(cadena, objeto)

obj1 = {a:34, b: new Date()}
console.log(obj1)
console.log(JSON.stringify(obj1))

var factura = {
    id:1,
    fecha: new Date(),
    cliente:{
        nombre:"juan",
        id:"id1",
        dir:{
            calle:"Avenida la estación",
            dp:65498
        },
    },
    lineas: [
        {
            nombre:"product1",
            cantidad:2,
            precio:2.5,
        },
        {
            nombre:"product2",
            cantidad:1,
            precio:12.5,
        },
        {
            nombre:"product3",
            cantidad:5,
            precio:1.5,
        }
    ]
}

console.log(JSON.stringify(factura, null, 4)) //se suele poner un 4, es el tamaño del tabulador 

function calcularTotal(f){
    var total = 0
    for (item of f.lineas){
        total = total + item.cantidad * item.precio
        console.log("bucle", total)
    }
    return total
}

console.log("Total:", calcularTotal(factura))
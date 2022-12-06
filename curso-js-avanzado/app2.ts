interface ICliente{
    nombre:string
    id:string
    //dir no lo hacemos para no eternizarnos
}
interface ILinea{
    nombre:string
    cantidad:number
    precio:number
}
interface IFactura{
    id:number
    fecha:Date
    cliente:ICliente
    lineas:ILinea[]
}

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

function calcularTotal2(f:IFactura):number{
    var total = 0
    for (var item of f.lineas){
        total = total + item.cantidad * item.precio
        console.log("bucle", total)
    }
    return total
}

console.log("Total:", calcularTotal2(factura))
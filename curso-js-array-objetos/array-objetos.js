const valores = [12,56,44,32,34];

const factura = {
    items:[
        {
            importe: 100
        },
        {
            importe: 200
        },
        {
            importe: 300
        },
        {
            importe: 400
        }
    ]
}

function  calcularMedia(conjunto){
    var suma = 0;
    for (ele of conjunto){
        suma = suma + ele;
    }
    console.log("Suma",suma);
    console.log("Número de elementos", conjunto.lenght);
    
    var media = suma / conjunto.lenght;

    return media;
}

var m = calcularMedia(valores);

console.log(m)

function sumaLineas(fact){
    var suma = 0;
    for(linea of fact.items){
        console.log("Valor de la línea", linea.importe);
        suma += linea.importe;
    }
    console.log(suma);
    return suma;
}

var total = sumaLineas(factura);

const arr = [1,2,3,4,5,6,7,8,9];

const suma = arr.reduce((acum, val) => acum + val*3 );
console.log(suma)
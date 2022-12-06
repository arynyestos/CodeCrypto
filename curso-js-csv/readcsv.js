const csv = require("csv-parser")
const fs = require("fs")

var resultado = []

fs.createReadStream("./datos/customers.csv")
    .pipe(csv())
    .on("headers", headers => {
        console.log(headers)
    })
    .on("data", (data) => {
        resultado.push(data)
    })
    .on("end", () => {
        console.log(resultado)
    })

    // El código que se pusiera aquí se ejecutaría antes que lo que va dentro de los pipe.on, por lo que usamos promesas, 
    // ya que en caso de querer hacer muchas más cosas tendrían que ir todas dentro del .on("end") y quedaría farragoso.
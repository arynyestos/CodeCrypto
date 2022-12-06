const csv = require("csv-parser")
const fs = require("fs")

function leerCsv(nombreFichero) {
    return new Promise((resolve,reject) => {
        const resultado = {
            headers: [],
            data: []
        }
            fs.createReadStream(`./datos/${nombreFichero}.csv`)
            .on("error", err => {
                reject(err)
            })
            .pipe(csv())
            .on("headers", headers => {
                resultado.headers = headers
            })
            .on("data", data => {
                resultado.data.push(data)
            })
            .on("end", () => {
                resolve(resultado)
            })
            .on("error", err => {
                reject(err)
            })
    })    
}

//Llamada directa

// leerCsv("customers")
//     .then((d) => {
//         console.log(d)
//     })
//     .catch((e) => {
//         console.log(e)
//     })
//     .finally(() => {
//         console.log("Acabó")
//     })

//Para hacer la llamada con una función asíncrona:

(async () => {
    try{
        const r = await leerCsv("customers1")
        console.log(r)
    } catch (error) {
        console.log(error)
    }
})()
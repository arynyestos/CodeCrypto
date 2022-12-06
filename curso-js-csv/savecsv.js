const pg = require("pg")
const otocsv = require("objects-to-csv")
const fs = require("fs")

const client = new pg.Client({
    host:"localhost",
    port:5555,
    database:"postgres",
    user:"postgres",
    password:"mysecretkey"
})

async function query(select, fichero){

    await client.connect()
    const resultado = await client.query(select)
    fs.writeFileSync(`./datos/${fichero}.json`, JSON.stringify(resultado.rows, null, 4))
    // Comentamos para llamar con customers en lugar de orders
    const filas = resultado.rows.map(fila => ({
        ...fila, // No parece imprescindible
        order_date: new Date(fila.order_date).toISOString().substring(0,10), 
        required_date: new Date(fila.required_date).toISOString().substring(0,10),
        shipped_date: new Date(fila.shipped_date).toISOString().substring(0,10)
    }))
    new otocsv(filas).toDisk(`./datos/${fichero}.csv`)
    // new otocsv(resultado.rows).toDisk(`./datos/${fichero}.csv`)
}

query("select * from orders","orders")
// query("select * from customers","customers")
const pg = require("pg")

const client = new pg.Client({
    host:"localhost",
    port:5555,
    database:"postgres",
    user:"postgres",
    password:"mysecretkey"
})


//Consulta con promesas anidadas

client.connect().then((cliente) => {
    client.query("select * from products", []).then(data => {
        console.log(data.rows)
        client.end();
    })
}).catch(e => {
    console.log("error", e.message)
})
const ex = require('express')
const mysql = require("./BBDD/mysql")

const servidor = ex()

servidor.get("/ping", (req, res) => {
    res.send({fecha: new Date().toISOString()})
})

servidor.get("/customersMysql", async (req, res) => {
    mysql.consulta("select * from Customers").then((resultados) => {
        res.send(resultados)
    }).catch(e => {
        res.send(e)
    })
})

servidor.listen(5555, () => {

})


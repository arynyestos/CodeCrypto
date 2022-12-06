const express = require("express")
const { Pool } = require("pg")
const cors = require("cors")
const ap = express()

ap.use(cors())

const paramsConexión = {
    user:"postgres",
    database: "postgres",
    password:"123345",
    // host: "localhost",
    // port: 5431,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    host: "pg",
    port: 5432,
}

const conexiones = new Pool(paramsConexión)

ap.listen(3000)

ap.get("/customers", async (req,res) => {
    const responseDB = await conexiones.query("select * from customers limit 10 ", [])
    res.send(responseDB.rows)
})

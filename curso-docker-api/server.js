const express = require("express")
var aplicación = express()

aplicación.listen(13080)
aplicación.get("/", (req, res) => {
    res.send("Hellow, World! Desde el contenedor.")
})
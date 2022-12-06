const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola mundo");
})

app.get("/hora", (req, res) => {
    res.send(new Date());
})

app.listen(3000, () => {
    console.log("Está escuchando en el puerto 3000")
});

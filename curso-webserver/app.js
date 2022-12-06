const ex = require("express");
const app = ex();

app.get("/", (req, res) => {
    res.send("Hola mundo");
})

//Podemos utilizar otras rutas
app.get("/ping", (req, res) => {
    res.send({fecha: new Date()});
})
app.listen("5345")
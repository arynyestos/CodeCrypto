const ex = require("express")
const {routerClientes} = require("./clientes")
const {routerProductos} = require("./productos")

const aplicación = ex()

aplicación.listen(45999) // Vale cualquiera menor que  el 65000 y pico
aplicación.use("/cli", routerClientes)
aplicación.use("/pro", routerProductos)

aplicación.get("/", (req, res) => {
    res.send("Soy la ruta / del servidor web")
})

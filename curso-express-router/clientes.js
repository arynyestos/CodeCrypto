const ex = require("express")

const routerClientes = ex.Router()

module.exports = {
    routerClientes
}

routerClientes.get("/", (req,res) => {
    res.send("Soy de clientes")
})

routerClientes.get("/welcome", (req,res) => {
    res.send("Bienvenido a clientes")
})
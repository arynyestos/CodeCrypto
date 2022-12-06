const ex = require("express")

const routerProductos = ex.Router()

module.exports = {
    routerProductos
}

routerProductos.get("/", (req,res) => {
    res.send("Soy de productos")
})
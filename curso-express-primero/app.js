const { request } = require("express")
const ex = require("express")
const fileUpload = require("express-fileupload")
const app = ex()
app.set("view engine", "pug")
const morgan = require("morgan")
const fs = require("fs")
const {Pool} = require('pg')
const Web3 = require("web3")
const Minio = require("minio")

app.use(ex.json())
app.use(ex.urlencoded())

app.get("/plantilla1", (req, res) => {
    res.render("t1.pug", {title:"Curso 2022", message:"Hola hola desde pug"})
})

const clienteMinio = new Minio.Client({
    endPoint: "localhost",
    port: 9009,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
    useSSL: false
})

app.post("/minio/createBucket", async (req, res) => {
    try{
        await clienteMinio.makeBucket(req.body.nombre, 'us-east-1') // Le damos el nombre y la zona horaria
        res.status(200).send({resultado:"ok"})
    } catch (error) {
        res.status(500).send({error})        
    }
})

app.post("/minio/anadirArchivo", async (req, res) => {
    const bucket = req.body.bucket;
    const fichero = req.files.fichero;
    try{
        await clienteMinio.putObject(bucket, fichero.name, file.data);
        res.status(200).send({resultado:"ok"})
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("minio/:bucket/:fichero", async (req, res) => {
    try {
        const flujoDatos = await clienteMinio.getObject(req.params.bucket, req.params.fichero)
        flujoDatos.pipe(res)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete("minio/:bucket/:fichero", async (req, res) => {
    try{
        await clienteMinio.removeObject(req.params.bucket, req.params.fichero)
        res.status(200).send("OK")
    } catch (error) {
        res.status(500).send(error)
    }
})

const WEB3_PROVIDER = "https://goerli.infura.io/v3/20b55e65c65649c686d7abc8e4853f0b" // URL sacada de infura

const web3 = new Web3(WEB3_PROVIDER)

app.get("/web3/saldo/:direccion", async (req, res) => {
    try{
        const saldo = await web3.eth.getBalance(req.params.direccion)
        const saldoETH = parseFloat(saldo) / 1e18
        res.send(saldoETH.toString())
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/web3/eth/bloques/:numero", async (req, res) => {
    try{
        const bloque = await web3.eth.getBlock(req.params.numero)
        res.send(bloque)
    } catch (error) {
        res.status(500).send(error)
    }
})

const conjunto = new Pool({
    localhost:"localhost",
    port:5499,
    user: "postgres",
    password: "123456"
})

app.get("/bdd/prueba", async (req, res) => {
    try{
        const respuesta = await conjunto.query("select now() fecha") //postgres nos devolverá la fecha
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send(error)
    }    
})

app.get("/bdd/customers", async (req, res) => {
    try{
        const respuesta = await conjunto.query("select * from customers") 
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send(error)
    }    
})

app.get("/bdd/customers/:cliente", async (req, res) => {
    try{
        const respuesta = await conjunto.query("select * from customers where customer_id = $1", [req.params.cliente])
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send(error)
    }    
})

app.get("/bdd/orders/:cliente", async (req, res) => {
    try{
        const respuesta = await conjunto.query("select * from orders where customer_id = $1", [req.params.cliente])
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send(error)
    }    
})

app.get("/bdd/orders/:cliente/:order_id", async (req, res) => {
    try{
        const respuesta = await conjunto.query("select * from orders where customer_id = $1 and order_id = $2", [req.params.cliente, req.params.order_id])
        console.log(respuesta.rows.length)
        if (respuesta.rows.length == 0){
            res.status(404).send({descripción: "No existe la factura"})
        } else{
            res.send(respuesta.rows)
        }        
    } catch (error) {
        res.status(500).send(error)
    }    
})


const resgistroErrores = fs.createWriteStream("uploads/logsErrores.txt", {
    flags: "a"
})

const resgistroBuenos = fs.createWriteStream("uploads/logsBuenos.txt", {
    flags: "a"
})

app.use(morgan("tiny", {
    skip: function (req, res) {return res.statusCode >= 400},
    stream: resgistroBuenos
}))

app.use(morgan("combined", {
    skip: (req, res) => res.statusCode < 400,
    stream: resgistroErrores
}))

app.use(ex.json())
app.use(ex.static("public", {
    index: "index.html"
}))

app.use("/docs", ex.static("docs", {
    index: "index.html"
}))

app.use(ex.urlencoded({extended:true}))

app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024}
}))

app.get("/hola1", function (req, res) {
    res.send("hola 1")
})

app.get("/hola2", (req, res) => {
    res.send("hola 2")
})

app.post("/addUser", (req,res) => {
    // Aquí iría el código para realizar la acción
  res.status(200).send("He añadido un usuario")  
})

app.post("/echoPost", (req, res) => {
    res.send({body:req.body, qs:req.query})
})

app.post("/echoPostExtended", (req, res) => {
    res.send({bodyExtended:req.body})
})

app.post("/echoPostJson", (req, res) => {
    req.send({bodyJson:req.body})
})

app.post("/echoParamsPost/:cliente/facturas/:factura", (req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        params: req.params
    })
})

app.get("/echoParamsGet/:cliente/facturas/:factura", (req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        params: req.params
    })
})

app.post("/uploadFicheros", async (req, res) => {
    try{
        const fichero1 = req.files.file1
        const fichero2 = req.files.file2
        const fichero3= req.files.file3
        if (fichero1) await fichero1.mv(`uploads/${fichero1.name}`)
        if (fichero2) await fichero2.mv(`uploads/${fichero2.name}`)
        if (fichero3) await fichero3.mv(`uploads/${fichero3.name}`)
        res.send({
            body:req.body,
            nombre1: req.files.file1.name,
            nombre2: req.files.file2.name,
            nombre3: req.files.file3.name
        })
    } catch(error){
        res.status(500).send("Error al subir algún fichero")
    }
    res.send("Ficheros subidos sin incidencias")
})

app.post("/uploadFicherosMultiple", async (req, res) => {
    try{
        for (const [index, fichero] of req.files.ficherosvarios.entries()){
            await fichero.mv(`uploads/${fichero.name}`)
        }
    } catch(error){
        res.status(500).send("Error al subir algún fichero")
    }
    res.send("Ficheros subidos sin incidencias")
})
    
// app.get("*", (req, res) => {
//     res.status(404).send("Not found")
// })
 
app.get("/error", (req, res) => {
    throw new Error("Se ha producido un error y no puedo seguir")
})

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})
   
app.get("*", (req, res) => {
    res.redirect("/404.html")
})


app.listen(3344)


import express, { Application, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'


const app:Application = express()


// El body puede estar en dos posibles formatos:
// - URL encoded: a=22&b=22
// - JSON: {a:1, b:22}
app.use(morgan("combined"))
//Configuramos body-parser como middleware
app.use(bodyParser.urlencoded({extended:false})) // Permite analizar el cuerpo si viene en el primer formato
app.use(bodyParser.json()) //Permite analizar el cuerpo extrayendo la inforamción y convirtiéndola en un archivo JSON

//Middleware (¿para qué sirve?)
app.use((req:Request, res:Response, next:NextFunction) => {
    res.setHeader("X-Start", new Date().toISOString())
    next();
})

app.post("/formulario", async (req, res) => {
    const datos = {
        body: req.body, //contiene los datos del body
        param : req.query //contiene los datos de la url
    }
    //Aquí podría haber accesos a bases de datos, etc., etc., que harían que X-Start y X-End fueran distintos y se pudiera calcular el tiempo de respuesta
    res.setHeader("X-End", new Date().toISOString())
    res.send(JSON.stringify(datos)) //Devuelve en formato JSON el body de la request independientemente de su formato, gracias a los app.use
})
//Get y post son dos formas diferentes de transferir datos del cliente al servidor 
app.get("/", async (req:Request, res:Response) => { //Puede ser async o no serlo
    // res.send("hola")
    res.send(req.query)
})

app.listen(4444)

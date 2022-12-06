const express = require("express")
const aplicación = express()

aplicación.listen(3000)

aplicación.get("/welcome", async (req,res) => {
    res.send("welcome")
})

aplicación.get("/eco", async (req,res) => {
    res.send(new Date())
})


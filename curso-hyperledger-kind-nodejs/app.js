const ex = require("express");
const ap = ex();

ap.get("/", async (req, res) => {
    res.send("Hola por tercera vez")
})

ap.listen(3000)
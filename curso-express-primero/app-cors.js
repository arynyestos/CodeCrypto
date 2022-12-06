const ex = require("express")
const cors = require("cors")

const app = ex()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Respondo desde el servidor 2")
})

app.listen(3345)
const ex = require("express")
const Web3 = require("web3")

const ap = ex()
const web3 = new Web3("http://localhost:8545")

ap.get("/ping", (req, res) =>{
    res.send({fecha: new Date().toISOString()})
})

ap.get("/saldo/:cuenta", async (req, res) =>{
    const saldo = await web3.eth.getBalance (req.params.cuenta)
    res.send({saldo})
})

ap.get("/enviar/:cuenta", async (req, res) =>{
    //Crear tx de ETH
    const tx = await web3.eth.accounts.signTransaction({
        to: req.params. cuenta,
        value: ethers.utils.parseEther("10").toHexString(),
        gas: 2000000
    }, '0x' + process.env.PRIVATE_KEY)
    //Firmar la tx

    //Enviar la tx al proveedor

    //Enviar el nuevo saldo

    res.send({enviado: req.params.cuenta})
})

ap.listen(4000, () => {
    console.log("listen")
})
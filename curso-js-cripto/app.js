const cr = require("crypto")

function hash(valor, algoritmo) {
    var hash = cr.createHash(algoritmo).update(valor)
    return hash.digest('hex')
}

// console.log(hash('welcome', 'sha256'))

//Hacemos una encriptación
const key = cr.randomBytes(32)
const iv = cr.randomBytes(16)

function enc(text){
    let cipher = cr.createCipheriv("aes-256-cbc", key, iv)
    let encriptado = cipher.update(text)
    encriptado = Buffer.concat([encriptado, cipher.final()]) //la concatenación con la parte final hay que ponerla porque si no se pierde un cacho de la cadena
    return encriptado
}

//Y una desencriptación

function des(text){
    let d = cr.createDecipheriv("aes-256-cbc", key, iv)
    let des = d.update(text)
    des = Buffer.concat([des, d.final()])
    return des.toString()
}

var r = enc("encríptame")
var d = des(r)
console.log(r.toString('hex'))
console.log(d)
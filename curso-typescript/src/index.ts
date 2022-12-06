var numero: number = 33
var fecha:Date = new Date()
var cadena:string = "Hola"
console.log(numero, fecha, cadena)


//Interfaces

interface IInt0{
    dato:number
}

interface IInt1{
    a:number
    b:string
    c:Date
    h:IInt0
}

var v1: IInt1 = {
    a:1,
    b:"hola",
    c: new Date(),
    h:{
        dato:44
    }
}

interface IInt2 extends IInt1{
    d:number
}

var v2 : IInt2 ={
    a:1,
    b:"hola",
    c: new Date(),
    d:12,
    h:{
        dato:98
    }
}

v1.a = 11


// Declaramos un vector que pueda albergar elementos que cumplan con dos interfaces diferentes

interface I1 {
    a: number
}

interface I2{
    b: string
}


var arr: (I1 | I2) [] = [
    {
        a:12
    },
    {
        b:"string"
    }
]

//También con variables
var v3 : (I1 | I2) = {
    a: 111
}

v3 = {
    b:"asdf"
}

console.log(v3)

var numeros: number[] = [1,2,3,5]
var nombres: string[] = ["a","b","c"]
var numerosynombres: (number|string)[] = [1,2,3,"b","c"]


function mul(a: number, b: number): number{
    return a * b
}

const f1 = (a: number, b:number):number => a * b

console.log(mul(5,4))
console.log(f1(3,5))

var listanums : number[] = [1,2,3,4,5]

const pares = listanums.filter((numero:number): boolean => numero % 2 == 0)

console.log(pares)

interface ICoordenada {
    x: number
    y: number
}

const printCoord = (c:ICoordenada): void => console.log(`Coord. x: ${c.x}`, `Coord. y: ${c.y}`)

printCoord({
    x:1, 
    y:2
})

var c1: ICoordenada = {
    x:3,
    y:4
}

printCoord(c1)

//Con un vector
var coordenadas: ICoordenada[] = [
    {x:3, y:4},
    {x:3, y:5},
    {x:3, y:8},
    {x:3, y:6}
]

coordenadas.forEach((c:ICoordenada) => printCoord(c))

//Si quisiéramos hacer un filtro antes de imprimir
console.log("Filtrado:")
coordenadas
    .filter((c:ICoordenada):boolean => c.x > 2)
    .forEach((c:ICoordenada): void => printCoord(c))


interface IC {
    x: number,
    y: number
}

var coord: IC[] = [
    {x:1, y:1},
    {x:2, y:1},
    {x:3, y:1},
    {x:4, y:1},
    {x:5, y:1}
]

//Función lambda que devuelve objetos desde un índice hasta el final o entre dos índices 
const pagina = (p: number, u?: number): IC[] => {
    if (u === undefined){
        return coord.filter((c:IC, index:number):boolean => {
             return index >= p
        })
    } else{
        return coord.filter((c:IC, index:number):boolean=>{
            return index >= p && index <= u
        })
    }
}


console.log(pagina(3))
console.log(pagina(1,3))

//Para hacer eso mismo pero más ligero
const pagina2 = (p: number, u?: number): IC[] => {
    const filtro = (a:IC, indice:number) => (u === undefined) ?  indice >= p :  indice >= p && indice <= u
    return coord.filter(filtro)
}

console.log(pagina2(3))
console.log(pagina2(1,3))

type tipoPunto = [number, number, number, string]

var castillo: tipoPunto = [1, 1, 1, "castillo"]

type tiopOpcion = [string, boolean]

var opcion1: tiopOpcion = ["mayus", true]
var opcion2: tiopOpcion = ["minus", true]
var opcion3: tiopOpcion = ["negrita", false]

var opciones:tiopOpcion[] = [
    ["mayus", true],
    ["minus", true],
    ["negrita", false]
]

console.log(opciones)


class Persona {
    private _nombre : string
    private _saldo: number
    constructor(nombre:string, saldo:number = 0){
        this._nombre = nombre
        this._saldo = saldo
    }
    get nombre(){
        return this._nombre
    }
    get saldo(){
        return this._saldo
    }
    set saldo(importe){
        this._saldo = importe
    }
    addSaldo(importe:number):void{
        this._saldo += importe
    }
}

var pepe = new Persona("Pepe", 354)
pepe.addSaldo(100)    
console.log(pepe.nombre, pepe.saldo)
pepe.saldo = 100
console.log(pepe.nombre, pepe.saldo)

interface ICalculadora {
    sumar (a:number, b:number):number
    restar (a:number, b:number):number
    multiplicar (a:number, b:number):number
    dividir (a:number, b:number):number
}

// Implementando las funciones como lambdas
class Calculadora implements ICalculadora{    
    sumar = (a:number, b:number):number => a+b
    restar = (a:number, b:number):number => a-b
    multiplicar = (a:number, b:number):number => a*b
    dividir = (a:number, b:number):number => a/b
}

// Implementando las funciones normal
class Calculadora2 implements ICalculadora{    
    sumar(a:number, b:number):number{ return a+b}
    restar(a:number, b:number):number{ return a-b}
    multiplicar(a:number, b:number):number{ return a*b}
    dividir(a:number, b:number):number{ return a/b}
}

var calc1 = new Calculadora()
console.log(calc1.sumar(1,3))

//Otra forma de definir la clase

class Persona2 {
    constructor(private nombre:string){

    }
    get getNombre(){
        return this.nombre
    }
}

var paco = new Persona2("Paco")
console.log(paco.getNombre)

//Declarar una clase con un atributo opcional
class C1{
    private _a:number;
    private _b:number | undefined;
    constructor(a:number = 0, b?:number){
        this._a = a;
        b === undefined? this._b = 0 : b
    }
    get a(){
        return this._a
    }

    get b(){
        return this._b
    }
}

var o1 = new C1(12)
console.log(o1.b, o1.a)
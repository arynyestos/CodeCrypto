import { memo, useCallback, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"

var root = document.getElementById("root") as HTMLElement // Encuentra el div con id root, que viene por defecto al crear la aplicación

interface IRegistro {
  id:string
  nombre:string
}

interface IListaProps {
  registros: IRegistro[]
  borrarReg: (id:string) => void
}

interface IElemProps {
  item: IRegistro
  borrarReg: (id:string) => void
}

const Elemento: React.FC<IElemProps> = memo(({item, borrarReg}) => {
  useEffect(() => {
    console.log("elemento", item) // Los useEffect se ejecutan cada vez que se renderiza el elemento. Ponemos varios para comprobar si se renderiza (con el console.log).
  })

  return <li>{item.id} {item.nombre} <button onClick={() => borrarReg(item.id)}>Borrar</button></li>
})

const Lista: React.FC<IListaProps> = memo(({registros, borrarReg}) => {
  useEffect(() => {
    console.log("lista")
  })
  return <div>
    {
      registros.map((elemento:IRegistro, índice:number) => 
      <Elemento key={índice} item={elemento} borrarReg={borrarReg}></Elemento> // Los elementos de listas deben tener key
      )
    }
    </div>
})

// Creamos un vector con datos iniciales como si los hubiéramos extraído de una BD
const valoresIniciales : IRegistro [] = [ // Poniendo IRegistro[] validamos que el vector tiene el formato correcto (ventaja de TS)
  {
    id:"1",
    nombre:"producto 1"
  },
  {
    id:"2",
    nombre:"producto 2"
  }
]

const Aplicación = memo(() => {
  const [texto, setTexto] = useState("")
  const [productos, setProductos] = useState<IRegistro[]>(valoresIniciales)
  useEffect(() => {
    console.log("aplicación")
  })

  const añadirReg = () => {
    const nuevo:IRegistro = {
        id: new Date().getTime().toString(), // Manera de conseguir un id único
        nombre: texto
    }
    setProductos([...productos, nuevo]) 
  }

  const borrarReg = useCallback((id:string) => {
    setProductos(productos.filter(item => item.id != id))
  }, [productos])

  return <div>
    <input type="text" value={texto} onChange={(textoTecleado) => setTexto(textoTecleado.target.value)}></input>
    <button onClick={() => añadirReg()}>Añadir</button>
    <Lista registros={productos} borrarReg={borrarReg}></Lista>
  </div>
})

ReactDOM.createRoot(root).render(
  <Aplicación></Aplicación>
)
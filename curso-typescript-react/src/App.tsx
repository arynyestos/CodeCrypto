import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Componentes/Header'
import { variable } from './Componentes/Constantes'
// import Header from './Componentes/Header' //En caso de que a la función Header en Header.tsx se le ponga default

interface IPersona {
  nif:number 
  nombre:string
}

var personas:IPersona[] = [
  {nif:1, nombre:"Juan"},
  {nif:2, nombre:"Pedro"},
  {nif:3, nombre:"Manuel"}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header nombre = "Ofigaser S.L." dir ="Sainz de Baranda 53, 1ºD"></Header>
    {
      personas.map ((item:IPersona) => <div>{item.nombre}</div>)
    }
      <p>{variable}</p>
    </div>
  )
}

export default App

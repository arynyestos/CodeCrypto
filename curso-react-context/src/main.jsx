import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const ContextoGlobal = createContext()

const AplicaciónGlobal = ({children}) => {
  const [estado, setEstado] = useState({
    usuario: "usu1"
  })
  return <ContextoGlobal.Provider value={[estado, setEstado]}>
    {children}
  </ContextoGlobal.Provider>
}

const Hijo = () => {
  const [contexto, setContexto] = useContext(ContextoGlobal)
  return <div>
    Usuario: {contexto.usuario}
  </div>
}

const Nieto = () => {
  const [contexto, setContexto] = useContext(ContextoGlobal)
  const cambiar = () => {
    setContexto({...contexto, usuario: "usuario2"})
  }
  return <div>
    Soy el nieto. Usuario: {contexto.usuario}
    <button onClick={() => {cambiar()}}>Cambiar usuario</button>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AplicaciónGlobal>
    <h1>Hola</h1>
    <h1>Hola otra vez</h1>
    <Hijo></Hijo>
    <Nieto></Nieto>
  </AplicaciónGlobal>
)

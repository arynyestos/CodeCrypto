import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './Componentes/Home'
import {Lista} from './Componentes/Lista'
import {Tx} from './Componentes/Tx'
import {QueryClient, QueryClientProvider} from 'react-query'

const clienteConsulta = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={(clienteConsulta)}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path = '/home' element = {<p>Hola home</p>}/>
          <Route path = '/otraruta' element = {<p>Ésta es otra ruta</p>}/>
          <Route path = '/' element = {<Home></Home>}>
            <Route index element = {<p>Inicio</p>}/>
            <Route path = '/productos' element = {<p>Productos</p>}/>
            <Route path = '/clientes' element = {<p>Clientes</p>}/>
            <Route path = '/lista' element = {<Lista></Lista>}/>
            <Route path = '/tx' element = {<Tx></Tx>}/>
            <Route path = '/*' element = {<p>Ruta no válida</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
)

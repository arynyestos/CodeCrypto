import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {Home} from './Componentes/Home'
import {Productos} from './Componentes/Productos'
import {Saldo} from './Componentes/Saldo'
import { QueryClient, QueryClientProvider} from 'react-query'

const clienteConsultas = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client = { clienteConsultas }>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home></Home>}>
            <Route path="/productos" element = {<Productos></Productos>}/>
            <Route path="/saldo" element = {<Saldo></Saldo>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
)

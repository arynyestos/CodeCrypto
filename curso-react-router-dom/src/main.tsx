import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import './index.css'

const Disposición = () => {
  return <div>
    <p><Link to="contacto">Contacto</Link></p>
    <p><Link to="quienes-somos">Nosotros</Link></p>
    <p><Link to="servicios">Servicios</Link></p>
    <Outlet></Outlet>
  </div>

}

const Servicios = () => {
  return <div>
    <p>Tenemos estos servicios...</p>
    <p><Link to="ser1">Servicio 1</Link></p>
    <p><Link to="ser2">Servicio 2</Link></p>
    <p><Link to="ser3">Servicio 3</Link></p>
    <Outlet></Outlet>
  </div>
}

const Aplicación = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Disposición/>}>
        <Route path="contacto" element="Paco"></Route>
        <Route path="quienes-somos" element="Somos una empresa..."></Route>
        <Route path="servicios" element={<Servicios></Servicios>}>
          <Route index element ="Servicio por defecto"></Route>
          <Route path="ser1" element="Servicio 1"></Route>
          <Route path="ser2" element="Servicio 2"></Route>
          <Route path="ser3" element="Servicio 3"></Route>
        </Route>
        <Route path="*" element="Error 404: No encontrado."></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Aplicación/>
)

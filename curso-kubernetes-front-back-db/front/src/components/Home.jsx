import {Outlet} from 'react-router-dom'

export function Home() {
  return <div className='container'>
    <div>Inicio</div>
    <div>
      <Link to="/customers">Clientes</Link>
    </div>
    <Outlet></Outlet>
  </div>
}
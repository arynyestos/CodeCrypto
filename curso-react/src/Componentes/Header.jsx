import {Link} from 'react-router-dom'

export function Header(){
    return <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/lista">Lista</Link></li>
        <li><Link to="/tx">Transacción</Link></li>
    </ul>
}    
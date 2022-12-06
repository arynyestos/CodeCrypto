import { useQuery } from "react-query"
import axios from 'axios'

// Para que quede más limpio
async function getProductos(){
    return axios.get('http://localhost:8080/sql?sql=select * from products order by unit_price')
}

export function Productos(){
    // const { data: productos, isLoading, isError} = useQuery(['productos'], async () => {
    //     const { data } = await axios.get('http://localhost:8080/sql?sql=select * from products')
    // })
    const { data: productos, isLoading, isError} = useQuery(['productos'], async() => await getProductos())  // data es el dato que sale de useQuery, que con los dos puntos renombramos a "productos"

    if(isLoading){
        return <div>Cargando...</div>
    }

    return(
        // <div>{JSON.stringify(productos)}</div> // Salen un montón de datos a cholón, así que hacemos una tablita con menos cosas
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.data.map(producto => (
                        <tr key={producto.product_id}>
                            <td>{producto.product_id}</td>
                            <td>{producto.product_name}</td>
                            <td className="text-end">{producto.unit_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
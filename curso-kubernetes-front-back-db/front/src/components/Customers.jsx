import {useQuery} from 'react-query'

async function getCustomers() { // En una aplicación real esta función debería estar en una sección de funciones de acceso al servidor
    // const response = await fetch("http://localhost:3000/customers") // así era para la aplicación en local
    const response = await fetch("http://api.server.com:30000/customers") //así es para K8s
    const datos = response.json()
    return datos
  }

export function Customers() {
    const {data, isLoading, error} = useQuery("customers", getCustomers)
    if(isLoading){
      return <div>Cargando</div>
    }
    return <div>
      {/* {JSON.stringify(data, null, 4)} */}
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => <tr key={index}>
              <td>{item.customer_id}</td>
              <td>{item.company_name}</td>
              <td>{item.city}</td>
            </tr>)
          }
        </tbody>
      </table>
      </div>
  }
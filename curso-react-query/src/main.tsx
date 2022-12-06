import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'
import './index.css'

interface IAplicaciónProps {
  id: number
}

const Aplicación: React.FC<IAplicaciónProps> = ({id}) => {
  const {data, isLoading} = useQuery (["publicaciones"], async () => {
    const datos = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
    return datos // datos es lo que se le pasa a data
  })
  if (isLoading) return <p>Cargando...</p>
  return <div>
    {JSON.stringify(data)}
  </div>
}

const cliente = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={cliente}>
    <Aplicación id={7}/>
  </QueryClientProvider>
)

import {useQuery} from 'react-query'

export function Lista (){

    const {data, isLoading, isError} = useQuery(["query1"], () => { // Esta función es un ejemplo, normalmente aquí irá un acceso a base de datos
        return ["Juan","Pedro","Jose"]
        // throw new Error("ee") // Tiene que haber caracteres en la llamada de Error() para que funcione
    })
    if(isError) return <div>Error......</div>
    if(isLoading) return <div>Cargando......</div>

    // return <p>{JSON.stringify(data)}</p>
    return <p>
        <ul>
            {
                data.map((item,index) => 
                // data && data.map((item,index) => //Si no funcionase la línea anterior
                    <li key={index}>{item}</li> // Por cada elemento del vector data habrá un elemento en la lista
                )
            }    
        </ul>    
    </p>
}
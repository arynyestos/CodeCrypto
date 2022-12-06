import { useState, useEffect } from "react"

const Post = ({numero}) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${numero}`) //El fetch busca en internet y obtiene una respuesta
        .then(response => response.json()) // Analizamos la respuesta con json
        .then(data => setData(data)) // Los datos que se obtienen del análisis de la respuesta se utilizan para modificar el estado (data)
    }, [])
    if(!data) return <div>
            Cargando la publicación {numero}...
        </div>
    return <div>
        Publicación {numero}:
        {JSON.stringify(data)}
        <hr></hr>
    </div>
}

export const AppEffect = () => {
    return <div>
        <Post numero = {1}></Post>
        <Post numero = {2}></Post>
        <Post numero = {3}></Post>
        <Post numero = {4}></Post>
    </div>
}
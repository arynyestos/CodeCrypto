import {useMutation} from 'react-query'

export function Tx (){
    // const mutation = useMutation(() => {
    const {mutate, isLoading, isError} = useMutation(() => {
        console.log("He ejecutado la función")
        // console.log(JSON.stringify(mutation))
    })
    // Para hacer una segunda mutación
    const {mutate:m2, isLoading:isL2, isError:isE2} = useMutation(() => {
        console.log("He ejecutado la función 2")
    })
    // Y una tercera (de otra forma)
    const funcion3 = useMutation(() => {
        console.log("He ejecutado la función 3")
    })

    return <div>
        {/* <button onClick = {() => mutation.mutate()}> */}
        <button onClick = {() => mutate()}>
            Llamar
        </button>
        <button onClick = {() => m2()}>
            Llamar función 2
        </button>
        <button onClick = {() => funcion3.mutate()}>
            Llamar función 3
        </button>
    </div>
}
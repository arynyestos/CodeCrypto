import { useState } from "react"

// Este hook normalmente iría en otro archivo y se podría reutilizar en cualquier otro componente
const useContador = (número) => {
    const [c, setC] = useState(número)
    const incrementar = () => setC(c+1)
    const decrementar = () => setC(c-1)
    const reiniciar = () => setC(número)

    return{
        contador : c, // con los dos puntos renombramos c a contador
        incrementar,
        decrementar,
        reiniciar
    }
}

export const AppCustom = () => {
    const {contador, incrementar, decrementar, reiniciar} = useContador(0) // También se podría renombrar aquí con c : contador, en lugar de arriba
    const {contador: cont2, incrementar: inc2, decrementar: dec2, reiniciar: rei2} = useContador(17) // También se podría renombrar aquí con c : contador, en lugar de arriba
    return <div>
        {contador}<br/>
        <button onClick={() => incrementar()}>Incrementar</button><br/>
        <button onClick={() => decrementar()}>Decrementar</button><br/>
        <button onClick={() => reiniciar()}>Reiniciar</button><hr></hr>
        {cont2}<br/>
        <button onClick={() => inc2()}>Incrementar</button><br/>
        <button onClick={() => dec2()}>Decrementar</button><br/>
        <button onClick={() => rei2()}>Reiniciar</button>
    </div>
}
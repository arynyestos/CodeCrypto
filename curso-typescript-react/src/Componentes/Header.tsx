import { variable } from "./Constantes"
export interface IHeaderProps {
    nombre:string
    dir: string
}

// export function Header({nombre, dir}:IHeaderProps){
// //export default function Header({nombre, dir}:IHeaderProps){
//         return <>
//         <h1>{nombre}</h1>
//         <h2>{dir}</h2>
//         </>
// }
//Otra manera

export function Header(props:IHeaderProps){
        return <>
        <h1>{props.nombre}</h1>
        <h2>{variable}</h2>
        <h2>{props.dir}</h2>
        </>
}

//Se puede tener más de un componente por fichero .tsx, pero lo normal es tener uno sólo.
//P. ej.:
// export function Header2(props:IHeaderProps){
//     return <>
//     <h1>{props.nombre}</h1>
//     <h2>{props.dir}</h2>
//     </>
// }

//Se pueden tener también variables

//Creamos un archivo de constantes para esto:
// export const variable = "ofigaser.com"
// const variable2 = "loquesea" // sin el export no se pueden usar en App.tsx
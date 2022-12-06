import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CompA from './CompA'
import {CompB} from './CompB'
import {Likes} from './HookState'
import {AppEffect} from './HookUseEffect'
import {AppCustom} from './HookCustom'

// function Comp1(){
//   return "¿qué tal?"
// }

// const Comp2 = () => {
//   return "¿Cómo estás,"
// }

// const Comp3 = () => {
//   return <p>Nicolás?</p>
// }

// const Componente = (props) => {
//   return <p>{props.a} - {props.b}</p>
// }

// const OtroComponente = (props) => {
//   return <p>{props.a} - {props.b} <Componente b={props.b+10}></Componente></p>
// }

//Los componentes normalmente se ponen en archivos jsx aparte

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <h1>
//     Hola, <Comp1></Comp1> <Comp2></Comp2> <Comp3></Comp3>
//     <Componente a="1" b={5+9+1}></Componente>
//     <OtroComponente a="1" b={5+9+1}></OtroComponente>
//   </h1>
// )

const C1 = (props) => <p>Esto es un componente: {props.a}</p>
const lista = ["Valencia", "Alicante", "Castellón"]
const sesión = {
  usuario:"Paco"
}
// const sesión = null

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    Hola, <CompA b={5}></CompA> <CompB b="7"></CompB>
    <C1 a={2+9}/>
    {C1({a:95})}
    <ul>
      {
        lista.map((elemento, índice) => <li key={índice}>{elemento}</li>)
      }
    </ul>    
    {sesión && <p>El usuario está autenticado, se llama {sesión.usuario}.</p>}
    {sesión ? <p>El usuario está autenticado, se llama {sesión.usuario}.</p> : <p>El usuario no está autenticado.</p>}
    <Likes></Likes>
    <AppEffect/>
    <AppCustom/>
  </div>
)


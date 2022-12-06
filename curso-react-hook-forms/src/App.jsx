import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, getValues, setValue,
  formState: {errors} } = useForm();

  function onSubmit(data){ //Puede ser una función flecha o normal
    // Aquí lo que se suele hacer es acceder al servidor
    console.log('submit', data)
  }

  useEffect(()=>{
    console.log('Los valores actuales son', getValues())
  },
    [watch(getValues())]
  ) // El primer parámetro de la función useEffect es otra función y el segundo un vector de dependencias (es algo interno de React)

  // También se puede poner como dependencia un campo del formulario
  // useEffect(()=>{
  //   console.log("Ha cambiado el campo 2")
  // },
  //   [watch("campo2")]
  // )

  const actualizarCampo = (e) => { // Para que los valores introducidos en el campo 1 vayan al campo 3
    setValue("campo3", e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("campo1", {onBlur: (e) => actualizarCampo(e)})} /><br></br> {/*La función se ejecuta al cambiar de campo. Es un JSON, así que se ponen dos puntos en vez de igual.*/}
        {/*<input {...register("campo1", {onChange: (e) => actualizarCampo(e)})} /><br></br> {/* La función se ejecuta al cambiar el contenido del campo 1 (al teclear)*/}
        <input {...register("campo2", {required:true})} /><br></br> {/*El required hace que para que se pueda pulsar el submit (botón enviar) el campo 2 tenga que estar rellenado*/}
        <input {...register("campo3")} /><br></br>
        <input type="submit" /><br></br>
        {errors.campo2 && <span>El campo 2 es obligatorio</span>}
      </form>
    </div>
  )
}

export default App

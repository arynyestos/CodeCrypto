import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
const {ethereum} = window


function App() {
  const [cuenta, setCuenta] = useState(null)
  const [saldo, setSaldo] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function getSaldo(cuenta){ 
    const respuesta = await fetch(`http://localhost:3000/saldo/${cuenta}`)
    if (respuesta.status == "200"){
      const datos = await respuesta.json() 
      setSaldo(datos)
    }
  }
  
  async function enviarETH(){   
    setIsLoading(true)
    const respuesta = await fetch(`http://localhost:3000/enviar/${cuenta}`)
    if (respuesta.status == "200"){
      const datos = await respuesta.json() 
      await getSaldo(cuenta)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(cuentas => {
      setCuenta(cuentas[0])
      getSaldo(cuentas[0])
      ethereum.on("accountsChanged", (cuentas) => {
        setCuenta(cuentas[0])
        getSaldo(cuentas[0])
      })
    })
  }, [])

  return (
    <div className="container">
      <div>Cuenta {cuenta}</div>
      <div>Saldo = {JSON.stringify(saldo)}</div>
      {!isLoading && <button onClick={() => enviarETH()} className='mt-3 btn btn-primary'>Enviar 10 ETH</button>}
      {isLoading && <div>Procesando transacción...</div>}
    </div>
  )
}

export default App
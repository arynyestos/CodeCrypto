import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
const {ethereum} = window


function App() {
  const [cuenta, setCuenta] = useState(null)

  function enviarETH(){
    console.log("enviar 10 ETH", cuenta)
  }

  useEffect(() => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(cuentas => {
      setCuenta(cuentas[0])
      ethereum.on("accountsChanged", (cuentas) => {
        setCuenta(cuentas[0])
      })
    })
  }, [])

  return (
    <div className="container">
      <div>Cuenta {cuenta}</div>

      <button onClick={() => enviarETH()} className='mt-3 btn btn-primary'>Enviar 10 ETH</button>
    </div>
  )
}

export default App
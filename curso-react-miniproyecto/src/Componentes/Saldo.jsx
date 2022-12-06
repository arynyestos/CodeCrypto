import { ethers } from "ethers"
import { useEffect, useState } from "react"
import {useForm} from 'react-hook-form'

const {ethereum} = window

export function Saldo(){
    const [cuenta, setCuenta] = useState(null)
    const [saldo, setSaldo] = useState(null)
    const {register, handleSubmit} = useForm() // El nombre del parámetro y la función de los useState te los puedes inventar, pero en el useForm, no
    const [ok, setOk] = useState(null)
    const [ko, setKo] = useState(null)

    useEffect(() => {
        ethereum && ethereum.request({method:'eth_requestAccounts'}).then(cuenta => { //La promesa se ejecuta si ethereum existe y si el método eth_requestAccounts encuentra alguna cuenta
            setCuenta(cuenta[0]) // De toda la lista de cuentas que encuentra el método nos quedamos con la primera
            ethereum.on('accountsChanged', (i) => { // Si cambiamos de cuenta en Metamask lo detecta inmediatamente
                setCuenta(i[0])
            })
        })
    }, []) // El array vacío significa que lo vamos a ejecutar sólo la primera vez

    useEffect(() => {
        if(cuenta){
            const provider = new ethers.providers.Web3Provider(ethereum)
            provider.getBalance(cuenta).then(saldo => {
                // console.log(ethers.utils.formatEther(saldo))
                setSaldo(ethers.utils.formatEther(saldo))
            })
        }
    }, [cuenta]) // Como éste no tiene el array vacío se ejecuta cada vez que cambie la cuenta

    function ExcepDirecc(message) {
        this.message = message;
    }

    async function submit(data){
        // Esta inicialización también podría ir aquí, a mí se me ocurrió ponerla abajo
        // setKo(null)
        // setOk(null)

        const parametros = {
            from: cuenta,
            to: data.direc,
            value: ethers.utils.parseEther(data.cant).toHexString()
        }
        try{
            if (parametros.from == parametros.to) throw new ExcepDirecc("Error: misma dirección en origen y destino.")
            const txHash = await ethereum.request({
                method: 'eth_sendTransaction', 
                params: [parametros]
            })
                setOk(txHash)
                setKo(null)
        }catch(error){
                setKo(error.message)
                setOk(null)
        }
    }

    if(!ethereum){
        return<div>No hay Metamask instalada en el navegador</div>
    }
    return( // Si existe la cuenta, la mostramos. Si no, cargando...
        <div>
            <p>
                Cuenta: 
            {
            cuenta ? ' ' + cuenta : 'Cargando dirección...'
            }                
            </p>
            <p>
                Saldo: 
            {
            saldo ? ' ' + saldo + " GoerliETH" : 'Cargando saldo...'
            }    
            </p>
            <form className="form-inline" onSubmit={handleSubmit(submit)}>
                <div className="form-group mb-3">
                    <label htmlFor="direc">Dirección</label>
                    <input defaultValue="0xB36Fb73bFA836a928dAfA8131095b4e7e598b8a7" id="direc" className="form-control" {...register("direc")}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="cant">Cantidad</label>
                    <input defaultValue="0.0001" id="cant" className="form-control" {...register("cant")}/>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Send</button>
            </form>
            {ok && <div className="alert alert-info m-3">Hash de la transacción: {ok}</div>}
            {ko && <div className="alert alert-danger m-3">{ko}</div>}
        </div>
    )
}
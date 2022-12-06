const ax = require("axios")

async function getDatos (){
    // const r = await ax.get("https://jsonplaceholder.typicode.com/users")
    try{
        const r = await ax.get("https://reqbin.com/echo/get/json/page/2")
    } catch(e){
        return {e}
    }
    return r
}
(async () => {
    var datos = await getDatos()
    if (datos.data){
        console.log(JSON.stringify(datos.data,null,4))
    }else{
        console.log(datos)
    }
}
)() 

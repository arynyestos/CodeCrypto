const pg = require("pg")

const client = new pg.Client({
    host:"localhost",
    port:5555,
    database:"postgres",
    user:"postgres",
    password:"mysecretkey"
})

//Consulta con async - await
// async function query(){
async function query(country, city){ //Para poner parámetros
    try{
        await client.connect();
    } catch(error){
        console.log(error.message)
        return
    }
    try{
        // const r = await client.query("select * from products", []);
        // const r = await client.query("select * from customers where country = $1 AND city = $2", ['USA', 'Butte']); //Para poner parámetros
        const r = await client.query("select * from customers where country = $1 AND city = $2", [country, city]); //Para poner parámetros en la llamada
        console.log(r.rows);
    } catch(error){
        console.log(error.message)
        return
    } finally{
        await client.end();
    }
}

// async function query(){
//     await client.connect();
//     const r = await client.query("select $1 as campo1", ["hello"]);
//     console.log(r.rows);
//     await client.end();
// }

// query(); //sin parámetros en la llamada
query('USA', 'Butte');




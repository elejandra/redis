
const express = require('express');
const bodyParser= require('body-parser');
const redis = require('redis');
const client = redis.createClient();
const getApi=require('./getApi');
const fil=require('./filter');
const port=4000;

const app=new express();

app.use(bodyParser.json());

//guardar datos en redis
app.post("/",async (req,res)=>{
    
    const result = await getApi();
    result.forEach(element => {
        const nombre = element.name;
        const objeto = JSON.stringify(element);//tranformar el objeto en string
        client.set(nombre, objeto, redis.print);
        
    });
    res.json(result);
}
);



//mostrar los datos de redis
app.post("/ruta-2",async (req,res)=>{
    const {filter}=req.body;  //filtro de postman
    const nombre = filter.name;//obtener solo nombre de redis
    const response= await fil(nombre);//funcion filtrar
    res.json(JSON.parse(response));//de string a objeto  
});




app.listen(port,() => console.log(`App started ${port}`));
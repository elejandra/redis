const redis = require('redis');
const util = require('util');//libreria por defecto, podemos tranformar la funcion a asincrona

const client = redis.createClient();//inicializo redis

const getAsync = util.promisify(client.get).bind(client);//crea la promesa

const filter_redis= async (nombre)=>{ 
        const res = await getAsync(nombre);
        return res;        
};


module.exports =filter_redis;

//agregar si el filtro no se encuentra en redis 
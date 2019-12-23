const axios = require('axios');

const getApi= async ()=>{
    let base_dato=[]
    for (let index = 1; index < 5; index++) {
        const {data} = await axios.get( `https://swapi.co/api/starships/?page=${index}`); 
        base_dato.push(...data);//push.. agrega los datos de las paginas a la base de datos redis (pila)
    }
       return base_dato;

}

module.exports =getApi;

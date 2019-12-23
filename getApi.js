const axios = require('axios');

const getCharacters= async ()=>{
    const {data} = await axios.get("https://swapi.co/api/starships/?page=1");
    console.log(data.results)
    return data.results;

}

module.exports =getCharacters;
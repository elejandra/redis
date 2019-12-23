const getApi = require("../../src/getApi");
const axios  = require("axios")

jest.mock('axios');

describe('getApi',()=>{
    const resp={
        data: {
            results:[
                {name:"Executor"},
                {name:"Calamari Cruiser"},
                {name:"H-type Nubian yacht"},
                {name:"Naboo star skiff"},
                {name:"Millennium Falcon"}
            ]
        }
    };
    axios.get.mockResolvedValue(resp);
    it('retornar lista de las naves de 4 pag', async done =>{
        const result = await getApi();
        expect(Array.isArray(result)).toBeTruthy();//si devuelve algo el arreglo
        expect(axios.get).toHaveBeenCalledTimes(1);//si crea una llamada
        expect(result).toHaveLength(5);//si hay 5 valores en el arreglo
        expect(['neve','Execuu']).toEqual(expect.not.arrayContaining(result));
        done();
    })
})
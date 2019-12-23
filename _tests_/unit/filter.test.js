const filter=require('../../src/filter');
describe('filter', () =>{
    it('should filter the array', () =>{
        const list =[
            {name:"Executor",
            
        }  


        ];
        const fil=[
            {name:"Executor"}
        ];
        
        const filter_test = filter(list, fil);
        console.log(filter_test);
        
        expect(list).toEqual(fil);
        expect(filter_test.length).toEqual(1);
        expect(filter_test).toHaveLength(1);
       

    });
});
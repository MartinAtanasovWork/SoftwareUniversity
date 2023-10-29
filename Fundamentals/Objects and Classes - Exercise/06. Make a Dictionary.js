function dictionary(arr){
    let dictionary = {};
    for(let el of arr){
        let obj = JSON.parse(el);
        let term = Object.keys(obj)[0];
        let definition = Object.values(obj)[0];
        if(dictionary.hasOwnProperty(term)){
            dictionary[term] = definition;
        }else{
            dictionary[term] = definition;
        }
    }
   let sorted = Object.keys(dictionary).sort((a,b) => a.localeCompare(b));
   for(let term of sorted){
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
   }
}
dictionary([
    '{"Coffee":"A hot drink made  from the roasted and ground  seeds (coffee beans) of a   tropical shrub."}',
    '{"Bus":"A large motor vehicle  carrying passengers by road,  typically one serving the public  on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning  apparatus or container for  heating water."}',  
    '{"Tape":"A narrow strip of material, typically used to hold  or fasten something."}',
    '{"Microphone":"An instrumentor converting sound waves into   electrical energy variations  which may then be amplified,  transmitted, or recorded."}'
    ])

   
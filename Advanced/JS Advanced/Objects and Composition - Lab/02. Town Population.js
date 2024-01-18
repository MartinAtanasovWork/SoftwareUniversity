function solve(arr){
    let town = {};
    for(let el of arr){
        let [name,popultaion] = el.split(" <-> ");
        popultaion = Number(popultaion);
        if(name in town){
            town[name] += popultaion;
        }else{
            town[name] = popultaion;
        }
    }
    for(let [key,value] of Object.entries(town)){
        console.log(`${key} : ${value}`);
    }
}
function solve(input){
    let arr = [];
    for(let el of input){
        if(el.length > 0){
            let tokens = el.split(" / ");
            let name = tokens[0];
            let level = Number(tokens[1]);
            let items = tokens[2] ? tokens[2].split(", ") : [];
            let obj = {name,level,items};
            arr.push(obj);
        }
       
    }
    console.log(JSON.stringify(arr));
}
solve(
    ['Jake / 1000 / a']
    )
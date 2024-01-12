function solve(arr){
    let newarr = [];
    for(let el of arr){
        if(el < 0){
            newarr.unshift(el);
        }else{
            newarr.push(el);
        }
    }    
    console.log(newarr.join("\n"));
}
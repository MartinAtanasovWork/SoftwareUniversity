function solve(arr){
    let distinctArray = [];
    for(let el of arr){
        if(!distinctArray.includes(el)){
            distinctArray.push(el);
        }
    }
    console.log(distinctArray.join(" "));
}
solve([7, 8, 9, 7, 2, 3,
    4, 1, 2])
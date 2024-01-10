function solve(arr){
    console.log(arr.reduce((sum,a) => sum += a));
   
    let sum = 0;
    for(let el of arr){
        sum += 1/el;
    }
    console.log(sum);
    console.log(arr.map(String).join(""));    
}
solve([2, 4, 8, 16])
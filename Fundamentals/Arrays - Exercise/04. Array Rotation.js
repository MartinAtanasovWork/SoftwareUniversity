function solve(arr1,rotations){
    for(let i=1;i <=rotations;i++){
        let el = arr1.shift();
        arr1.push(el); 
    }
    console.log(arr1.join(" "));
 }
 solve([51, 47, 32, 61, 21], 2 )
 
function solve(arr,n){
    for(let i=0;i < n;i++){
        arr.shift(arr.pop());
    }
    console.log(arr.join(" "));
}
solve([1,2,3,4,5],2)
function solve(arr,n){
    arr = arr.filter((a,i) => i % n == 0);
    return arr;
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
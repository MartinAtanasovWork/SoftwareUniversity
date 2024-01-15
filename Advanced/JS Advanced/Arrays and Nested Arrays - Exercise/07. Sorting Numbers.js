function solve(arr){
    arr.sort((a,b) => a - b);
    let newArr = [];
    for(let i=0;i < Math.floor(arr.length / 2);i++){
        newArr.push(arr[i]);
        newArr.push(arr[arr.length-1 - i]);
    }
    if(arr.length % 2 == 1){
        newArr.push(arr[Math.floor(arr.length / 2)]);
    }
    
    return newArr;
}
solve([1,2,3,4,5,6])
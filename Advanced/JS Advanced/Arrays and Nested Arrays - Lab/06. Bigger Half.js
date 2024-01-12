function solve(arr){
    arr.sort((a,b) => b-a);
    let newArr = [];
    for(let i=0;i < Math.ceil(arr.length/2);i++){
        newArr.push(arr[i]);
    }
    newArr.sort((a,b) => a- b);
    return newArr
}
function solve(arr){
    let newArr = [];
    let biggestNumber = arr[0];
    for(let i =0;i < arr.length;i++){
        if(arr[i] >= biggestNumber){
            newArr.push(arr[i]);
            biggestNumber = arr[i];
        }
    }
    console.log(newArr.join(" "));
}
solve([ 20, 3, 2, 15, 6, 1]  )
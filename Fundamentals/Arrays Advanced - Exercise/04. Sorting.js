function solve(arr){
    arr.sort((a,b) => b - a);
    let biggests = [];
    let smallests = [];
    let newArr = [];
    for(let i= 0;i < arr.length;i++){
        if(i < arr.length / 2 ){
            biggests.push(arr[i])
        }else{
            smallests.push(arr[i]);
        }
    }
    smallests.sort((a,b) => a -b);
    for(let i = 0; i < arr.length /2;i++){
        newArr.push(biggests[i]);
        newArr.push(smallests[i]);
    }
    console.log(newArr.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])
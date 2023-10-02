function solve(arr){
    let oldSum = 0;
    let isMagical = true;
    let len = arr[0].length;
    for(let i = 0;i < len ;i++){
        let sum = 0;
           for(let j = 0;j < arr.length;j++){
            sum += arr[j][i];
        }
        if(i == 0){
            oldSum = sum;
        }
        if(oldSum != sum){
            isMagical = false;
        }
        oldSum = sum;
    }
    console.log(isMagical ? "true" : "false");
}
solve([[4, 5, 6,1],
    [6, 5, 4,1],
    [5, 5, 5,1]])

function solve(arr){
    let oldSum = 0;
    let isMagical = true;
    for(let i = 0;i < arr.length ;i++){
        let sum = 0;
        for(let j = 0;j < arr[i].length;j++){
            if(j > i){

            }else{
                sum += arr[j][i];
            }
      
        }
        if(i == 0){
            oldSum = sum;
        }
        if(oldSum != sum){
            isMagical = false;
        }
        oldSum = sum;
    }
    console.log(isMagical);
}
solve([[1],[1],[2,2,2,2]])

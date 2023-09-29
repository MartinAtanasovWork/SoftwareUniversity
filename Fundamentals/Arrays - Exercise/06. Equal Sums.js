function solve(arr){
    let exists = true;
    for(let i =0;i < arr.length;i++){
        let leftSum = 0;
        let rigthSum = 0;
        for(let k = i+1;k < arr.length;k++){
            rigthSum += arr[k];
        }

        for(let j = i -1;j >= 0;j--){
            if(j < 0){
                break;
            }else{
                leftSum += arr[j];
            }
         
        }

        if(leftSum == rigthSum){
            console.log(i);
            exists = false;
        }
     
    }
    if(exists){
        console.log("no");
    }
    
}
solve([1, 2, 3, 1]);
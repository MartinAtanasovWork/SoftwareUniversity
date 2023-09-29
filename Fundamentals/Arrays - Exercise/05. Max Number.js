function solve(arr,rotations){
    let result = "";
   for(let i =0;i < arr.length;i++){
       let isMax = true;
       for(let j=i + 1;j < arr.length;j++){
        if(arr[i] > arr[j]){

        }else{
            isMax = false;
            break;
        }
        
       } 
       if(isMax){
        result += `${arr[i]} `
    }
   }
   console.log(result);
 }
 solve([1, 4, 3, 2]);
 
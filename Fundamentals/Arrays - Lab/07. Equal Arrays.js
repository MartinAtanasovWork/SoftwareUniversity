function solve(arr1,arr2){
    let sum =0;
    let diffIndex = 0;
    let isSame = true;
        for(let i=0;i < arr1.length;i++){
        if(Number(arr1[i]) === Number(arr2[i])){
            sum += Number(arr1[i]);
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isSame = false;
            break;
        }
      }
      
    if(diffIndex == 0 && isSame){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
  }
  solve(['10'], ['1','1'])   
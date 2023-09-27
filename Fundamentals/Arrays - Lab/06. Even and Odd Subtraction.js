function solve(arr){
    let resultEven = 0;
    let resultOdd = 0;
    for(let i=0;i <= arr.length -1;i++){
     let number = Number(arr[i]);
     if(number % 2 == 0){
        resultEven+=number;
     }else{
        resultOdd+=number;
     }
    }
    console.log(resultEven - resultOdd);
  
  }
  solve([1,2,3,4,5,6])   
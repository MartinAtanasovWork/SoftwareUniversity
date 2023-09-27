function solve(arr){
    let result = 0;
    for(let i=0;i <= arr.length -1;i++){
     let number = Number(arr[i]);
     if(number % 2 == 0){
        result+=number;
     }
    }
    console.log(result);
  
  }
  solve(['2','4','6','8','10'])   
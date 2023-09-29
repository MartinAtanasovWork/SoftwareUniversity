function solve(arr1,arr2){
    let murgedArray = [];
   for(let i =0;i<arr1.length;i++){
    let result;
    if(i % 2 == 0){
        result = Number(arr1[i]) + Number(arr2[i]);
        murgedArray.push(result)
    }else{
        result = arr1[i] + arr2[i];
        murgedArray.push(result)
    }
   }
   console.log(murgedArray.join(" - "));
 }
 solve(['5', '15', '23', '56', '35'],
 ['17', '22', '87', '36', '11'])
 
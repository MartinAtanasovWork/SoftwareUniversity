function solve(a,b,c){
  let arr = [a,b,c];
  let arr2 = arr.sort();
  arr2. sort((a,b)=>b-a)
  for(let i=0;i<3;i++){
    console.log(arr2[i]);
  }
 
  
}
solve(1,2,3)
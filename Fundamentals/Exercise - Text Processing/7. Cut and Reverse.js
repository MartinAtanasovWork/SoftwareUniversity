function cutAndReverse(string){
   let first = string.substring(0,string.length /2).split("").reverse().join("");
   let second = string.substring(string.length/2,string.length).split("").reverse().join("");
   console.log(first);
   console.log(second);
} 
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
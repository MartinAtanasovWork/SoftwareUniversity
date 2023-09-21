function solve(num){
    for(let i=1;i <= num;i++){
        let numAsString = i.toString();
        let isSprecial = "False";
        let sum = 0;
        for(let j=0;j < numAsString.length;j++){
            sum+=Number(numAsString[j]);
           
        }
        if(sum == 5 || sum == 7 || sum == 11){
           isSprecial = "True";
        }
          console.log(`${i} -> ${isSprecial}`);
    }
    
}
solve(15)
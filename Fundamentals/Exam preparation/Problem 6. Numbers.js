function numbers(nums){
    let numsArray = nums.split(" ").map(Number);
    let average = numsArray.reduce((x,sum) => sum += x) / numsArray.length;
    let higherThenAverage = [];
    for(let el of numsArray){
        if(el > average){
            higherThenAverage.push(el);
        }
    }
    higherThenAverage.sort((a,b) => b-a);
    let print = [];
    for(let i=0;i < Math.min(5,higherThenAverage.length);i++){
        print.push(higherThenAverage[i]);
    }
    if(print.length == 0){
        console.log("No");
    }else{
        console.log(print.join(" "));
    }
   
}
numbers('-1 -2 -3 -4 -5 -6');
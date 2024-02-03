function subSum(range,start,end){
    if(!Array.isArray(range)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end > range.length-1){
        end = range.length-1;
    }
    let sum = 0;
    for(let i = start;i <= end;i++){
        sum += Number(range[i])
    }
    return sum;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
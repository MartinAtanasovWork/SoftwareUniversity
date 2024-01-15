function solve(arr){
    let newArr = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for(let el of arr){
        if(el >= biggest){
            biggest = el;
            newArr.push(el);
        }
    }
  
    return newArr;
}
solve([1,2,3,1,55,33,66]);
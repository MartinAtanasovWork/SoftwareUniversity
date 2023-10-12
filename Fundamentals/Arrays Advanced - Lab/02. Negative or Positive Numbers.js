function negativeAndPositive(arr){
    let result = [];
    for(let el of arr){
        if(el < 0){
            result.unshift(el);
        }else{
            result.push(el)
        }
    }
    for(let el of result){
        console.log(el);
    }
}
negativeAndPositive([2,6,-4,0,-3,-5,7,-2,4,0,-3,4,5,6,-5,-3,5,7]);
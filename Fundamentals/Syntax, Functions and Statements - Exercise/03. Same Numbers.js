function solve(num){
    let string = String(num);
    let first = string[0];
    let same = true;
    let sum = 0;
    for(let el of string){
        if(first != el){
            same = false;
        }
        sum += Number(el);
    }
    console.log(same);
    console.log(sum);
}
solve(2222222222)
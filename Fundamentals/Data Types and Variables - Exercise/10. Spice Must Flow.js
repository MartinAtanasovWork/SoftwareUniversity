function solve(yield){
    let sum = 0;
    let isHere = true; 
    let days = 0;
    while(yield >= 100){
        days++;
        sum += yield;
        sum -= 26;
        yield -= 10;
        if(yield - 10 < 100 && isHere){
            sum -= 26;
            isHere = false;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    console.log(days);
    console.log(sum);
}
solve(450)
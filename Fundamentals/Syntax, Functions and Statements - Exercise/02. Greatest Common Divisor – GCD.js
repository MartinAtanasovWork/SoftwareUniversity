function solve(num1,num2){
    let greatest = 1;
    for(let i = 1;i < Math.max(num1,num2) / 2;i++){
        if(num1 % i == 0 && num2 % i == 0){
            greatest = i;
        }
    }
    console.log(greatest);
}
solve(12,90)
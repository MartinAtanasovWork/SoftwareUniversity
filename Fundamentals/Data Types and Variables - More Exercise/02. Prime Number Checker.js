function solve(num){
    let a = 0;
    for(let i=1;i <= num;i++){
        if(num % i == 0){
            a++;
        }
    }
    if(a == 2){
        console.log(true);
    }else{
        console.log(false);
    }
}
solve(8)
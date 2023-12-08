function solve(num){
    for(let i=1;i <= num;i++){
        let print = [];
        for(let j=0;j < i;j++){
            print.push(i);
        }
        console.log(print.join(" "));
    }
}
solve(3)
function solve(n,k){
    let arr = [1];
    for(let i =1;i < n;i++){
        let sum = 0;
        for(let el of arr.slice(-k)){
            sum += el;
        }
        arr.push(sum);
    }
    console.log(arr.join(" "));
}
solve(6,3)
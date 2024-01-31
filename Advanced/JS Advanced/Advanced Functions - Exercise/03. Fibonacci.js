function getFibonator(){
    let fibonacciNums = [];

    function nextNum(){
        let next = 0;
        if(fibonacciNums.length == 0){
            next=1;
        }else{
            let start = (fibonacciNums.length) - 2 < 0 ? 0 : fibonacciNums.length-2;
            for(let i = start;i < fibonacciNums.length;i++){
                next += fibonacciNums[i];           
            }
        }
        fibonacciNums.push(next);
        return next;
    }
    return nextNum;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

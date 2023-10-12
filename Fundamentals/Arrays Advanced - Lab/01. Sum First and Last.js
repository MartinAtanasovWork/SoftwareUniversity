function sumFirstAndLast(arr){
    let first = arr.shift();
    let last = arr.pop();
    console.log(Number(first) + Number(last));
}
sumFirstAndLast(["1","2","3"]);
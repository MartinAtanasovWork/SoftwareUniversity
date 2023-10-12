function soolve(arr){
    let k = arr[0];
    arr.shift();
    console.log(arr.slice(0,k).join(" "));
    console.log(arr.slice(-k).join(" "));
}
soolve([2,7,8,9])
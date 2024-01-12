function solve(arr){
let nums = [];
for(let i=0;i < arr.length;i++){
    if(i % 2 == 0){
        nums.push(arr[i]);
    }
}
    console.log(nums.join(" "));
}
function solve(arr,nums){
    let elems = nums[0];
    let deleteNums = nums[1];
    let search = nums[2];
    let newArr = [];
    let searchNums = 0;
    for(let i =0;i < elems;i++){
        newArr.push(arr[i]);
    }
    for(let i =0 ;i < deleteNums;i++){
        newArr.shift();
    }
    for(let i = 0;i < newArr.length;i++){
        if(newArr[i] == search){
            searchNums++;
        }
    }
    console.log(`Number ${search} occurs ${searchNums++} times.`);
}
solve([7, 1, 5, 8, 2, 7],
    [4, 3, 8]
    )
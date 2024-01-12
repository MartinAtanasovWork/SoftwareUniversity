function solve(arr){
    let biggest = -9999999999999999999;
    for(let i= 0;i < arr.length;i++){
        for(let j=0;j < arr[i].length;j++){
            if(arr[i][j] >= biggest){
                biggest = arr[i][j];
            }
        }
    }
    return biggest;
}
solve(
	[[1]]
)
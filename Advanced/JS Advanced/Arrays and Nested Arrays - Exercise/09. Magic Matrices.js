function solve(matrix){
    let firstSum = 0;
    for(let i=0;i < matrix.length;i++){
        let sum = 0;
        for(let j=0;j < matrix.length;j++){
            if(i == 0){
                firstSum += matrix[i][j];
            }else{
                sum += matrix[i][j];
            }
        }
        if(sum != firstSum && i != 0){
            console.log(false);
            return
        }
    }
    console.log(true);
}
solve([[3],
    [1,1,1],
    [1,2]]
   )
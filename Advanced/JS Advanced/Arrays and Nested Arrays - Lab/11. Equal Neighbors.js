function solve(matrix){
    let neightboors = 0;
    for(let i=0;i < matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            let elem = matrix[i][j];
            if(j < matrix[i].length - 1 && matrix[i][j + 1] == elem){
                neightboors++;
            }
            if(i < matrix.length - 1 && matrix[i + 1][j] == elem){
                neightboors++;
            }                    
        }
    }
    console.log(neightboors);
}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)
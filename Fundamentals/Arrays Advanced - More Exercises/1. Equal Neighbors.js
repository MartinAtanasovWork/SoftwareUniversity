function neighbours(matrix){
    let neighbours = 0;
    let a = [];
    for(let i =0;i < matrix.length;i++){
        for(let j =0;j < matrix[i].length - 1;j++){
            if(matrix[i][j] == matrix[i][j + 1]){
                neighbours++;
            }
        }
        for(let j=0;j<matrix.length - 1;j++){
            if(matrix[j][i] == matrix[j + 1][i]){
                neighbours++;
            }
        }
    }
    console.log(neighbours);
}
neighbours([['test', 'yo', 'yo',
'ho'],
['well', 'done', 'no',
'6'],
['not', 'done', 'yet',
'5']]
)
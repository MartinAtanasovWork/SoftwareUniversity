function solve(matrix){
    let diagonal1 = 0;
    let diagonal2 = 0;
    for(let i=0;i < matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            if(i == j){
                diagonal1+= matrix[i][j];
            }
        }
    }
    matrix.map(a => a.reverse());

    for(let i=0;i < matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            if(i == j){
                diagonal2+= matrix[i][j];
            }
        }
    }
    console.log(diagonal1,diagonal2);
  
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
   )
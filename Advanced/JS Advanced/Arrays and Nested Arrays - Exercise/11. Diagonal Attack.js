function solve(arr){
    let matrix = arr.map((a) => a = a.split(" ").map(Number));
    let diag1 = 0;
    let diag2 = 0;
    let copy = arr.map((a) => a = a.split(" ").map(Number)); 
    for(let i = 0;i < matrix.length;i++){
         diag1 += matrix[i][i];
         diag2 += matrix[i][matrix.length-1-i];
    }
    if(diag1 == diag2){
        for(let i=0;i < matrix.length;i++){
            for(let j=0;j < matrix.length;j++){
                matrix[i][j] = diag1;
            }
        }
        for(let i=0;i < matrix.length;i++){
            matrix[i][i] = copy[i][i];
            matrix[i][matrix.length-1-i] = copy[i][copy.length-1-i];
        }
        for(let row of matrix){
            console.log(row.join(" "));
        }
    }else{
        for(let row of matrix){
            console.log(row.join(" "));
        }
    }
   
}

solve(['1 1 1',
'1 1 1',
'1 1 0']

);
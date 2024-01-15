function solve(arr){
    let [x,y,startX,startY] = arr;
    let matrix = [];
    for(let i=0;i < x;i++){
        let arr = [];
        for(let j=0;j < y;j++){
            arr.push(0);     
        }
        matrix.push(arr);
    }
    matrix[startX][startY] = 1;
    for(let i = startX;i < x;i++){
        for(let j=startY;j < y;j++){
            matrix[i][j] = 1 + Math.abs(startX - i);
            matrix[j][i] = 1 + Math.abs(startY - i); 
        }
    }
    for(let i = startX;i >= 0;i--){
        for(let j=startY;j >= 0;j--){
            matrix[i][j] = 1 + Math.abs(startX - i);
            matrix[j][i] = 1 + Math.abs(startY - i); 
        }
    }
    for(let row of matrix){
        console.log(row.join(" "));
    } 
}
solve([4, 4,3,3]
    )
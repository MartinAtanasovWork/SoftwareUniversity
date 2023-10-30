function bunnyKills(arr){
    let bombs = arr.pop();
    let indexes = bombs.split(" ");
    let kills = 0;
    let damage = 0;
    let numbers = [];
    let rowLength = 0;
    for(let i =0;i < arr.length;i++){
        let row = arr[i].split(" ").map(Number);
        rowLength = row.length;
        row.map((x) => numbers.push(x));
    }
    let newArr = [];
    let index = 0;
    for(let x = 0;x < arr.length;x++){
        let row = [];
        
        for(let y = 0;y < rowLength;y++){
            row.push(numbers[index]);
            index++;
        }
        newArr.push(row);
    }
    for(let i = 0;i < indexes.length;i++){
        let tokens = indexes[i].split(",");
        let x = Number(tokens[0]);
        let y = Number(tokens[1]);
        newArr = bombExplosion(x,y,newArr);
    }
    newArr.map(x => x.map(y => {
        damage += y;
        if(y > 0){
            kills++;
        }
    }))

    console.log(damage);
    console.log(kills);
    function bombExplosion(x,y,matrix){
        if(matrix[x][y] > 0){
            let doneDamage = matrix[x][y];
            damage += doneDamage;
            kills++;
            matrix[x][y] = 0;
            let startX = Math.max(x-1,0);
            let startY = Math.max(y-1,0);
            let endX=Math.min(x+1,matrix.length-1);
            let endY=Math.min(y+1,matrix[0].length-1);


            for(let i = startX;i <= endX;i++){
                for(let j= startY;j <= endY;j++){
                    if(matrix[i][j] - doneDamage < 0){
                        matrix[i][j] = 0;
                    }else
                    matrix[i][j] -= doneDamage;
                }
            }
        }  
        return matrix;
    }
}
bunnyKills(
    [
        "2 2 2 2",
        "2 2 2 2",
        "2 2 2 2",
        "0,0 0,2 2,0"
    ]
)
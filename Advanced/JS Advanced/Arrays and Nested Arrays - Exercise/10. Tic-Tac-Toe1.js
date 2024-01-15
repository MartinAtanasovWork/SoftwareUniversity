function solve(moves){
    let dashboard = [[false,false,false],[false,false,false],[false,false,false]];
    let eleml = "X";
    for(let i=0;i < moves.length;i++){
        let [x,y] = moves[i].split(" ");
                
        if(dashboard[x][y] == false){
            dashboard[x][y] = eleml;
            let result = hasWon(dashboard);
            if(result == "O"){
                console.log("Player O wins!");
                printBoard(dashboard);
                return;
            }else if(result == "X"){
                console.log("Player X wins!");
                printBoard(dashboard);
                return;
            }else if(result == "draw"){
                console.log("The game ended! Nobody wins :(");
                printBoard(dashboard);
                return;
            }
            eleml = eleml == "X" ? "O" : "X";
        }else if(dashboard[x][y] == "X" || dashboard[x][y] == "O"){
            console.log("This place is already taken. Please choose another!");
        }
    }
    function printBoard(board){
        for(let x of board){
            console.log(x.join("\t"));
        }
    }
    function hasWon(board){
        for(let x=0;x < 2;x++){
            if(board[x][0] == "X" && board[x][1] == "X" && board[x][2] == "X"){
                return "X";    
            }
            if(board[x][0] == "O" && board[x][1] == "O" && board[x][2] == "O"){
                return "O";    
            }
            if(board[0][x] == "X" && board[1][x] == "X" && board[2][x] == "X"){
                return "X";
            }
            if(board[0][x] == "O" && board[1][x] == "O" && board[2][x] == "O"){
                return "X";
            }
        }
        if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")){
            return "X";
        }
        if(((board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))){
            return "O";
        }
        let taken = 0;
        for(let x of board){
            for(let y of x){
                if(y == "X" || y == "O"){
                    taken++;
                }
            } 
        }
        if(taken == 9){
            return "draw";
        }
    }

}
solve([
"0 1",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)
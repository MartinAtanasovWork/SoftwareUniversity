function solve(index){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(index > 0 && index < 8){
        console.log(days[index-1]);
    }else{
        console.log("Invalid day!");
    }

}
solve(1)
function solve(command){
    let size = command[0];
    let indexes = command[1].split(" ");
    let ladybugs = [];
    for(let i = 0;i < size;i++){
          ladybugs[i] = 0;  
         
    }   
    for(let i = 0;i < indexes.length;i++){
        ladybugs[Number(indexes[i])] = 1;
    }

    for(let i =2;i < command.length;i++){
        let tokens = command[i].split(" ");
        let indexOfBug = Number(tokens[0]);
        let moove = tokens[1];
        let step = Number(tokens[2])
        ladybugs[indexOfBug] = 0;
        if(moove == "right"){
            for(let i = indexOfBug+step; i < size;i+= step){
                if(i > ladybugs.length - 1){
                    break;
                }
                if(ladybugs[i] == 0){
                    ladybugs[i] = 1;
                    break;
                }
            }
        }else {
            for(let i = indexOfBug - step; i > 0;i-= step){
                if(i < 0){
                    break;
                }
                if(ladybugs[i] == 0){
                    ladybugs[i] = 1;
                    break;
                } 
        }
                       
    }
       
    }
    console.log(ladybugs.join(" "));
}
solve([ 3, '0 1 2',
'2 right 1']
)
   
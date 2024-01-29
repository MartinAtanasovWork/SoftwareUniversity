function listProcessor(commands){
    let innerList = [];

    for(let command of commands){
        edit(command);
    }
    function edit(commandInfo){
        let [command,text] = commandInfo.split(" ");
        if(command == "add"){
            innerList.push(text);
        }else if(command == "remove"){
            let newCol = [];
            for(let el of innerList){
                if(el != text){
                    newCol.push(el);
                }
            }
            innerList = newCol;
        }else if(command == "print"){
            
            console.log(innerList.join(","));
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
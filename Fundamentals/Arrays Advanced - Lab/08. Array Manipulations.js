function solve(arr){
    let newArr = arr[0].split(" ");
    for(let i=1;i < arr.length;i++){
        let tokens = arr[i].split(" ");
        if(tokens[0] == "Add"){
            newArr.push(tokens[1]);
        }else if(tokens[0] == "Remove"){
            while(newArr.includes(tokens[1])){
                newArr.splice(newArr.indexOf(tokens[1]),1);
            }  
        }else if(tokens[0] == "RemoveAt"){
            newArr.splice(tokens[1],1);
        }else if(tokens[0] == "Insert"){
            let array = [];
            for(let i =0;i < newArr.length;i++){
                if(i != tokens[2]){
                    array.push(newArr[i])
                }else{
                    array.push(tokens[1]);
                    array.push(newArr[i])
                }
            }
            newArr = array;
        }
    }
    console.log(newArr.join(" "));
}
solve(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

)
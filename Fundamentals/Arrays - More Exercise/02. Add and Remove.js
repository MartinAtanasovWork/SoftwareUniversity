function solve(arr){
    let newArr = [];
    let currentNum = 1;
    if(arr.length > 0){
        for(let i = 0;i < arr.length;i++){
            let command = arr[i];
            if(command === 'add'){
                newArr.push(currentNum);
                currentNum ++; 
            }else if(command == "remove"){
                newArr.pop();
                currentNum ++; 
            }
        }
        if(newArr.length > 0){
            console.log(newArr.join(" "));
        }else{
            console.log("Empty");
        }
    
    }else{
        console.log("Empty");
    }
}
solve(['remove', 'remove', 'remove'])
function solve(arr){
    let newArr = [];
    for(let i =1;i <= arr.length;i++){
        if(arr[i-1] == "add"){
            newArr.push(i);
        }else{
            newArr.pop();
        }
    } 
    if(newArr.length == 0){
        console.log("Empty");
    }else{
        console.log(newArr.join("\n"));
    }
}
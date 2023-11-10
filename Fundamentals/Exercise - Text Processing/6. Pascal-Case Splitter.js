function pascalCase(arr){
    let print = [];
    let add = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i].toUpperCase() && i !== 0){
            print.push(add);
            add = arr[i];
        }else{    
            add += arr[i];
        }
        if (i === arr.length - 1) {
            print.push(add);
        }
    }
    console.log(print.join(", "));
}
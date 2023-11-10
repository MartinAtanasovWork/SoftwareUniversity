function repeating(string){
    let arr = string.split("");
    let previous = "";
    let print = "";
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == previous){
            if(i == arr.length -1){
                print += previous; 
            }
        }else{
            print += previous;
            previous = arr[i];
            if(i == arr.length -1){
                print += arr[arr.length-1]; 
            }
     
        }
    }
    console.log(print);
}
repeating('qqqwerqwecccwd')
function valueOfString(arr){
    let string = arr[0];
    let command = arr[1];
    let sum = 0;
    if(command == "LOWERCASE"){
        for(let i=0;i < string.length;i++){
            if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <=122){
                sum += string[i].charCodeAt();
            }
        }
    }else{
        for(let i=0;i < string.length;i++){
        if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
            sum += string[i].charCodeAt();
        }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfString(['AC/DC',
'UPPERCASE']

)
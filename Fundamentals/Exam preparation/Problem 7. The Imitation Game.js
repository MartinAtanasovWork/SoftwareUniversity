function imitation(arr){
    let string = arr.shift();
    for(let el of arr){
        if(el == "Decode"){
            break;
        }
        let tokens = el.split("|");
        let command = tokens.shift();
        if(command == "ChangeAll"){
            let [letter,change] = tokens;
            string = string.split(letter).join(change);
        }else if(command == "Insert"){
            let [index,value] = tokens;
            string = string.substring(0,index) + value + string.substring(index,string.length);   
        }else if(command == "Move"){
            let index = tokens[0];
            let arrString = string.split("");
            for(let i =0; i < index;i++){
                arrString.push(arrString.shift());
            }
            string = arrString.join("");
        }
    
    }
    console.log(`The decrypted message is: ${string}`);
}
imitation([

    'owyouh',
    
    'Move|2',
    
    'Move|3', 
    
    'Insert|3|are', 'Insert|9|?', 'Decode'])
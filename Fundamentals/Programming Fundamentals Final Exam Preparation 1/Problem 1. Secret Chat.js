function solve(arr){
    let message = arr.shift();
    for(let el of arr){
        if(el == "Reveal"){
            break;
        }
        let tokens = el.split(":|:");
        let command = tokens.shift();
        let currentMessage = "";

        if(command == "InsertSpace"){
            let index = Number(tokens[0]);
            for(let i =0;i < message.length;i++){
                if(i == index){
                    currentMessage += " ";
                }
                currentMessage += message[i];
            }
        }else if(command == "Reverse"){
            let word = tokens.shift();
            if(message.includes(word)){
                let reversedWord = word.split("").reverse().join("");              
                let newMsg = message.substring(0,message.indexOf(word)) + message.substring(message.indexOf(word) + word.length,message.length) + reversedWord;
                currentMessage = newMsg;
            }else{
                console.log("error");
                continue;
            }
        }else if(command == "ChangeAll"){
            let word = tokens.shift();
            let replacement = tokens.shift();
            currentMessage = message.split(word).join(replacement);
        }
        message = currentMessage;
      console.log(message);
    }
    console.log(`You have a new text message: ${message}`);
}
solve([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    'Reveal',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ])
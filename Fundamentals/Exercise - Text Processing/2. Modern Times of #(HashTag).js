function modernTimes(string){
    let arr = string.split(" ");
    for(let word of arr){
        if(word[0] == "#"){
            let isValid = true;
            for(let i=1;i < word.length;i++){
                if((word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) || (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122)){
                }else{
                    isValid = false;
                }
            }
            if(isValid && word.length > 1){
                console.log(word.substring(1,word.length ));
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia'
)
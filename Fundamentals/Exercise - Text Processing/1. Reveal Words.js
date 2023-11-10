function revealWords(words,string){
    let wordsArr = words.split(", ");
    let stringArr = string.split(" ");
    for(let i = 0;i < stringArr.length;i++){
        for(let replacement of wordsArr){
            if(stringArr[i][0] == "*"){
                if(stringArr[i].length == replacement.length){
                    stringArr[i] = replacement;
                }
            }
            
        }
    }
    console.log(stringArr.join(" "));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)
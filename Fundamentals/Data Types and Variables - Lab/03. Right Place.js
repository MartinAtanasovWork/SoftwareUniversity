function solve(word,letter,match){
    let result = "";
    for(let i=0;i < word.length;i++){
        if(word[i] == "_"){
            result+=letter
        }else{
            result+=word[i];
        }
    }
    console.log(result == match ? "Matched" : "Not Matched");
}
solve('Str_ng', 'I',
'Strong' 
)
function substring(word,string){
    let arr = string.split(" ").map((a) => a.toLowerCase());
    console.log(arr);
    if(arr.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }
}
substring('javascript',
'JavaScript is the best PPPogramming language'
)
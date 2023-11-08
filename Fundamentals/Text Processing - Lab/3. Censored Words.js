function censoredWords(text,censored){
    let joining = "";
    for(let el of censored){
        joining += "*";
    }
    console.log(text.split(censored).join(joining));
}
censoredWords('A small sentence with some words',
'small')
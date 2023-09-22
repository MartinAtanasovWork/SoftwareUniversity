function solve(letter){
    let code = letter.charCodeAt();
    if(code > 96 && code < 123){
        console.log("lower-case");
    }else{
        console.log("upper-case");
    }
}
   solve("a")
function solve(string){
    let num = 0;
    string = string.split("").reverse().join("");
    for(let i=0;i < string.length;i++){
        if(string[i] == 1){
            num += 2 ** i;
        }
    }
    console.log(num);
}
solve("00001001");
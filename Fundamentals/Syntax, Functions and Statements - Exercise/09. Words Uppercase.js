function solve(string){
    let pattern = /[\w]+/gm;
    let matches = string.match(pattern).map(x => x.toUpperCase());
    console.log(matches.join(", "));
}
solve('Hi, how are you?')
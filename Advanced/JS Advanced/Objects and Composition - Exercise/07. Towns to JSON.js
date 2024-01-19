function solve(input){
    let arr = [];
    input.shift();
    for(let el of input){
        let tokens = el.split("|").map(el => el.trim()).filter((el) => el != "");
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
        arr.push({"Town" : tokens[0],"Latitude": Number(latitude),"Longitude":Number(longitude)});
    }
    console.log(JSON.stringify(arr));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)
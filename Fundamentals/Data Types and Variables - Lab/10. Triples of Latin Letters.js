function solve(numAsString){
    let num = Number(numAsString);
    for(let i=0;i < num;i++){
        let letter1 = String.fromCharCode(97+i);
        for(let j=0;j < num;j++){
            let letter2 = String.fromCharCode(97 + j);
            for(let a=0;a < num;a++){
                let letter3 = String.fromCharCode(97 + a);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
solve("3");
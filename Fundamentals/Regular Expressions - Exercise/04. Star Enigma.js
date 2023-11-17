function starEnigma(arr){
    arr.shift();
    let letterPattrn = /[star]/gi;
    let destroyed = [];
    let atacked = [];
    for(let command of arr){
        let matches = command.match(letterPattrn);
        let key = matches.length;
        let newCommand = "";
        if(matches !== null){
            for(let i=0;i < command.length;i++){
                newCommand += String.fromCharCode((command[i]).charCodeAt() - key);
            }
            let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<group>[AD])![^@\-!:>]*->(?<soldiers>\d+)/m;
            let planetMatch = planetPattern.exec(newCommand);
            if(planetMatch !== null){
                if(planetMatch.groups.group == "A"){
                    if(!atacked.includes(planetMatch.groups.name)){
                        atacked.push(planetMatch.groups.name);
                    }
               }else if(planetMatch.groups.group == "D"){
                if(!destroyed.includes(planetMatch.groups.name)){
                    destroyed.push(planetMatch.groups.name);
                }
               }
            }
        }         
    } 
    atacked.sort((a,b) => a.localeCompare(b));
    destroyed.sort((a,b) => a.localeCompare(b));
    console.log(`Attacked planets: ${atacked.length}`);
    for(let el of atacked){
        console.log(`-> ${el}`);
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    for(let el of destroyed){
        console.log(`-> ${el}`);
    }
}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']

)
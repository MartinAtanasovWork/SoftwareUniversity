function solve(string){
    let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let matches = string.match(pattern);
    let points = 0;
    if(matches === null){
    console.log(`Destinations: `);
    console.log(`Travel Points: 0`);
    return;
    }

    for(let i =0;i < matches.length;i++){
        let newWord = "";
        for(let j = 1; j < matches[i].length - 1;j++){
            newWord += matches[i][j];
        }
        matches[i] = newWord;
    }

    for(let el of matches){
        points += el.length;
    }
    console.log(`Destinations: ${matches.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
function solve([string]){
    let pairPattern = /([#@])[a-zA-z]{3,}\1\1[a-zA-z]{3,}\1/gm;

    let pairs = string.match(pairPattern);
    
    if(pairs === null){
        console.log("No word pairs found!");
        console.log("No mirror words!");
        return;
    }else{
        console.log(`${pairs.length} word pairs found!`);
    }

    let mirrorWords = [];

    for(let el of pairs){
        let words = el.split(el[0]);
        let firstWord = words[1];
        let secondWord = words[3];
        if(firstWord == secondWord.split("").reverse().join("")){
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
    }
    if(mirrorWords.length > 0){
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));  
    }else{
        console.log("No mirror words!");
    }
}
solve(
    [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)
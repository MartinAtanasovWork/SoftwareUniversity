function solve(arr){
    let dictionary = {};
    let testWords = [];
    let command = arr.pop();

    let definitions = arr.shift().split(" | ");
    for(let el of definitions){
        let [word,definition] = el.split(": ");
        
        if(word in dictionary){
            dictionary[word].push(definition);
        }else{
            dictionary[word] = [definition];
        }
    }

    testWords = arr.shift().split(" | ");
    
    if(command == "Test"){
        for(let word of testWords){
            if(dictionary[word] !== undefined){
                console.log(`${word}:`);
                for(let definition of dictionary[word]){
                    console.log(` -${definition}`);
                }
            }
        }
    }else {
        console.log(Object.keys(dictionary).join(" "));
    }
}
solve((["programmer: an animal, which turns coffee into code | developer: a magician",

"fish | domino",

"Hand Over"]))
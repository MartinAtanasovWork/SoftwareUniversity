function oddOccurrences(string){
    let words = string.split(" ");
    let occurrences = new Map();
    for(let el of words){
        if(occurrences.has(el.toLowerCase())){
           occurrences.set(el.toLowerCase(),occurrences.get(el.toLowerCase()) + 1);
        }else{
            occurrences.set(el.toLowerCase(),1);
        }
    }
    let filteredWords = new Map;
    for(let key of occurrences.keys()){
        if(!(Number(occurrences.get(key)) % 2 == 0)){
            filteredWords.set(key,occurrences.get(key));
        }
    }
    
    let print = [];
    for(let key of filteredWords.keys()){
        print.push(key);
    }
    console.log(print.join(" "));
}
oddOccurrences(`Cake IS SWEET is Soft CAKE sweet Food`);
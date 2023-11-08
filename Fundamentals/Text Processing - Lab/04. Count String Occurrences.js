function countOccurrences(sentance,word){
    let count = 0;
    for(let el of sentance.split(" ")){
        if(el == word){
            count++;
        }
    }
    console.log(count);
}


countOccurrences('softuni is great place for learning new programming languages',
'softuni'

)
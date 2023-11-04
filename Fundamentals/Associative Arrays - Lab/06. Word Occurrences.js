function wordOccurances(arr){
    let words = {};
    for(let el of arr){
        if(words.hasOwnProperty(el)){
            words[el] += 1;
        }else{
            words[el] = 1;
        }
    }
    let entries = Object.entries(words);
    let sorted = entries.sort((pair1,pair2) => {
        let count1 = pair1[1];
        let count2 = pair2[1];
        return count2 - count1;
    })
    words = Object.fromEntries(sorted);
    for(let [key,value] of Object.entries(words)){
        console.log(key,"->",value,"times");
    }
}
wordOccurances(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
)
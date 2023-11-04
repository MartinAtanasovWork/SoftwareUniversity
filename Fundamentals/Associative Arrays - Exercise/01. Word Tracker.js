function wordTracker(arr){
    let words = arr.shift().split(" ");
    let wordsTracker = {};
    for(let el of words){
        wordTracker[el] = 0;
    }
    for(let el of arr){
        if(words.includes(el)){
            wordTracker[el] += 1;
        }
    }
    let entries = Object.entries(wordTracker);
    let sortedEntries = entries.sort((a,b) => b[1] -a[1]);
    wordsTracker = Object.fromEntries(sortedEntries);
    for(let [key,value] of Object.entries(wordsTracker)){
        console.log(key,"-",value);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])
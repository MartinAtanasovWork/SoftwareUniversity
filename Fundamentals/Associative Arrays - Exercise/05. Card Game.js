function cardGame(arr){
    let people = {};
    let cardPoints = {2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14};
    let multiplayers = {S:4,H:3,D:2,C:1}
    for(let el of arr){
        let tokens = el.split(": ");
        let name = tokens.shift();
        let cards = tokens[0].split(", ");
        if(name in people){
            people[name].push(...cards);
        }else{
            people[name] = cards;
        }
    }
    let peoplePoints = {};
    for(let [key,decks] of Object.entries(people)){
        let unique = [];
        for(let deck of decks){
            if(!unique.includes(deck)){
                unique.push(deck);
            }
        }
        peoplePoints[key] = unique;
    }

    for(let [key,cards] of Object.entries(peoplePoints)){
        let points = 0;
        for(el of cards){
            let [p,t] = el.split("");
            if(p == "1"){
                p = 10;
            }
            if(t == "0"){
                t = el[2];
            }
            points += Number(cardPoints[p]) * Number(multiplayers[t]);
        }
        console.log(`${key}: ${points}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])
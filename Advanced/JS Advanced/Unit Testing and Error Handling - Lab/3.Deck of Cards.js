function deckOfCards(arr){
    function createCard(face,suit){
        face = face.toUpperCase();
        suit = suit.toUpperCase();
        if(!((Number(face) >=2 && Number(face) <= 10) || (face == "J" || face == "Q" || face == "K" || face == "A"))){
            throw Error();
        }
    
        let suits = {
           "S":"\u2660",
           "H":"\u2665",
           "D":"\u2666",
           "C":"\u2663"
        }
        let card = {
            face,
            suit,
            toString(){
                return `${face}${suits[suit]}`
            }
        }
        return card;
    }

    let cards = [];
    for(let el of arr){
        let cardFace,cardSuit;
        if(el.length == 2){
            [cardFace,cardSuit] = el.split("");
        }else{
            cardFace = el[0] + el[1];
            cardSuit = el[2];
        }
        try {
            let card = createCard(cardFace,cardSuit);
            cards.push(card);
        } catch (error) {
            console.log(`Invalid card: ${el}`);
            return;
        }
    }
    let result = [];
    for(let card of cards){
        result.push(card.toString());
    }
    console.log(result.join(" "));
}
deckOfCards(['AS', '111D', 'KH', '1C']);
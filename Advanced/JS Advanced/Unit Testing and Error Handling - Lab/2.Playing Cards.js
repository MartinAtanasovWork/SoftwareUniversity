function cards(face,suit){
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
console.log(cards('k', 'C').toString());
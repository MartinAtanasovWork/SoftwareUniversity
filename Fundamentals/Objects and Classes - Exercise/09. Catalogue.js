function solve(info){
    let catalogue = [];
    for(let i=0;i < info.length;i++){
     let itemInfo = info[i].split(" : ");
     let itemName = itemInfo[0];
     let itemPrice = Number(itemInfo[1]);
     let itemInitial = itemName[0];
     let item = {name:itemName,price:itemPrice,initial:itemInitial};
     catalogue.push(item);
    }
    catalogue.sort((a,b) => (a.name).localeCompare(b.name))
    let initials = [];
    for(let item of catalogue){
            initials.push(item.initial);
    }
    let countedInitials = [];
    let uniqueLetter = "";
    let lastLetter = "";
    while(initials.length > 0){
        let count = 0;
        let currentLetter = "";
        for(let letter of initials){
           if(letter == uniqueLetter){
            count++;
           }else{
            currentLetter = letter;
            break;
           }
        }
        lastLetter = uniqueLetter;
        uniqueLetter = currentLetter;
        countedInitials.push(`${count} ${lastLetter}`)
        for(let i=0;i < count;i++){
            initials.shift();
        }
    }
    countedInitials.shift();
    let index = 0;
    for(let el of countedInitials){
        let tokens = el.split(" ");
        console.log(tokens[1]);
        for(let i=0 + index;i < Number(tokens[0]) + index;i++){
            console.log(`  ${catalogue[i].name}: ${catalogue[i].price}`);
        }
        index += Number(tokens[0]);
    }
   
}
solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
        
    );
function treasureHunt(arr){
    let treasureChest = arr.shift().split("|");
    let treasureGain = 0;
    for(let i=0;i < arr.length;i++){
        let tokens = arr[i].split(" ");
        let command = tokens.shift();
        if(command == "Loot"){
            for(let el of tokens){
                if(!(treasureChest.includes(el))){
                    treasureChest.unshift(el);
                }
            }
        }else if(command == "Drop"){
            let index = Number(tokens[0]);
            if(index > 0 && index < treasureChest.length){
                let newArr = [];
                for(let i=0;i < treasureChest.length;i++){
                    if(i != index){
                        newArr.push(treasureChest[i]);
                    }
                }
                newArr.push(treasureChest[index]);
                treasureChest = newArr;
            }
            
        }else if(command == "Steal"){
            let count = Number(tokens[0]);
            let stolenLoot = [];
            let length = treasureChest.length
            for(let i=0;i < Math.min(count,length);i++){
                    stolenLoot.unshift(treasureChest.pop());      
            }
            console.log(stolenLoot.join(", "));
        }else if(command=="Yohoho!"){
            break;
        }
    }
    for(let el of treasureChest){
        treasureGain += el.length;
    }
    if(treasureChest.length == 0){
    console.log("Failed treasure hunt.");
    }else
    console.log(`Average treasure gain: ${(treasureGain / treasureChest.length).toFixed(2)} pirate credits.`);
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Steal 6"])
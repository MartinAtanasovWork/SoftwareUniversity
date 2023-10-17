function solve(arr){
    let pirateStatus = arr.shift().split(">").map(Number);
    let warshipStatus = arr.shift().split(">").map(Number);
    let maxHealth = Number(arr.shift());
    for(let i =0;i < arr.length;i++){
        let tokens = arr[i].split(" ");


        if(tokens[0] == "Fire"){
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if(index >=0 && index < warshipStatus.length){
                warshipStatus[index] -= damage;
                if(warshipStatus[index] <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        }else if(tokens[0] == "Defend"){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);
            if(startIndex >= 0 && startIndex < pirateStatus.length && endIndex >= 0 && endIndex < pirateStatus.length){
                for(let i = startIndex;i <= endIndex;i++){
                    pirateStatus[i] -= damage;
                    if(pirateStatus[i] <= 0){
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        }else if(tokens[0] == "Repair"){
            let index = Number(tokens[1]);
            let heal = Number(tokens[2]);
            if(index >= 0 && index < pirateStatus.length){
                pirateStatus[index] += heal;
                if(pirateStatus[index] > maxHealth){
                    pirateStatus[index] = maxHealth;
                }
            }     
        }else if(tokens[0] == "Status"){
            let count = 0;
            for(let el of pirateStatus){
                if(el < maxHealth/5){
                    count++;
                }
            }   
            console.log(`${count} sections need repair.`); 
        }else if(tokens[0] == "Retire"){
            let pirateSum = pirateStatus.reduce((x,sum) => sum += x);
            let warshipSum = warshipStatus.reduce((x,sum) => sum += x);
            console.log(`Pirate ship status: ${pirateSum}`);
            console.log(`Warship status: ${warshipSum}`);
            break;
        }
    }
}
solve((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 399",
"Defend 0 4 111",
"Repair 3 183",
"Retire"])
)
//2 sections need repair.
//Pirate ship status: 135
//Warship status: 205

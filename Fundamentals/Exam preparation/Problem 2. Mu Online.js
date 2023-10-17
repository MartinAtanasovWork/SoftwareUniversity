function solve(str){
    let health = 100;
    let coins = 0;
    let rooms = str.split("|");
    let bestRoom  = 0;
    for(let i =0;i < rooms.length;i++){
        let tokens = rooms[i].split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);
        bestRoom ++;
            if(command == "potion"){
                let heal;
                if(100 - health >= value){
                    heal = value;
                }else{
                    heal = 100 - health;
                }
                health += heal;
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else if(command == "chest"){
                coins += value;
                console.log(`You found ${value} bitcoins.`);
            }else{
                let a = health - value;
                if(health - value > 0){
                    health -= value;
                    console.log(`You slayed ${command}.`);
                }else{
                    health -= value;
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${bestRoom}`);
                    break;
                }
            }
    } 
    if(health > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
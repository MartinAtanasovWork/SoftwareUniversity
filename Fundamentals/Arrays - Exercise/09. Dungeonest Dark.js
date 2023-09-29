function dungeon(arr){
    let game = arr[0];
    let rooms = game.split("|");
    let health = 100;
    let coins = 0;
    let bestroom = 0;
    for(let room of rooms){
        bestroom++;
      let tokens = room.split(" ");
      let thing = tokens[0];
      if(thing == "potion"){
      let num = Number(tokens[1]);
      let newHp = health + num <= 100 ? num : 100 - health;
      health += newHp;
       console.log(`You healed for ${newHp} hp.`);
       console.log(`Current health: ${health} hp.`);
        }else if(thing == "chest"){
        coins += Number(tokens[1]);
        console.log(`You found ${tokens[1]} coins.`);
      }else{
        let monster = tokens[0];
        health -= Number(tokens[1]);
        if(health <= 0){
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${bestroom}`);
           break;
        }else{
            console.log(`You slayed ${monster}.`);
        }
      }  

    }        
  if(health > 0){
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
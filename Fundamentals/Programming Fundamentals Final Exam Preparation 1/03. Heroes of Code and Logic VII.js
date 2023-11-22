function solve(arr){
    let n = arr.shift();
    let heroes = {};

    for(let i=0;i<n;i++){
        let [name,hp,mp] = arr.shift().split(" ");
        heroes[name] = [Number(hp),Number(mp)];
    }

    for(let el of arr){
        if(el == "End"){
            break;
        }

        let tokens = el.split(" - ");
        let command = tokens.shift();

        if(command == "CastSpell"){
            let [name,MPneeded,spellName] = tokens;
            MPneeded = Number(MPneeded);
            if(name in heroes){
                if(heroes[name][1] >= MPneeded){
                    heroes[name][1] -= MPneeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name][1]} MP!`);
                }else{
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
            }    
        }
        else if(command == "TakeDamage"){
            let [name,damage,attacker] = tokens;
            damage = Number(damage);
            if(name in heroes){
                if(heroes[name][0] <= damage){
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroes[name];
                }else{
                    heroes[name][0] -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name][0]} HP left!`);
                }
            }   
        }
        else if(command == "Recharge"){
            let [name,amount] = tokens;
            amount = Number(amount);
            if(name in heroes){
                let recharged = heroes[name][1] + amount > 200 ? 200 - heroes[name][1] : amount;
                heroes[name][1] += recharged;               
                console.log(`${name} recharged for ${recharged} MP!`);
            }
        }
        else if(command == "Heal"){
            let [name,amount] = tokens;
            amount = Number(amount);
            if(name in heroes){
                let recharged = heroes[name][0] + amount > 100 ? 100 - heroes[name][0] : amount;
                heroes[name][0] += recharged;
                console.log(`${name} healed for ${recharged} HP!`);
            }
        }      
    }
    for(let [key,value] of Object.entries(heroes)){
        console.log(key);
        console.log(` HP: ${value[0]}`);
        console.log(` MP: ${value[1]}`);
    }
}
solve([
    "4",

    "Adela 90 150",

    "SirMullich 70 40",

    "Ivor 1 111",

    "Tyris 94 61",

    "Heal - SirMullich - 50",

    "Recharge - Adela - 100",

    "CastSpell - Tyris - 1000 - Fireball",

    "TakeDamage - Tyris - 99 - Fireball",

    "TakeDamage - Ivor - 3 - Mosquito",

    "End"
])
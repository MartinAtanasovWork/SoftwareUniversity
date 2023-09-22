function solve(fights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let sum = 0;
    let brokenHelmet = false;
    let brokenSword = false;
    let brokenShield = false;
    let brokenArmor = false;
    let brokenshields = 0;
    let shields = false;
    for(let i=1;i <= fights ; i++){
        if(i % 2 == 0){
            brokenHelmet = true;
        }
        if(i % 3 == 0){
            brokenSword = true;
        }
        if(brokenHelmet && brokenSword){
            brokenShield = true;
            brokenshields++;
            shields = true; 
        }
        if(brokenshields % 2 == 0 && shields){
            brokenArmor = true;
            shields = false;
        }
        if(brokenHelmet){
            sum += helmetPrice;
            brokenHelmet = false;
                   }
         if(brokenSword){
            sum += swordPrice;
            brokenSword = false;
                }
         if(brokenShield){
            sum += shieldPrice;
            brokenShield = false;
                  }
         if(brokenArmor){
            sum += armorPrice;
            brokenArmor = false;
                   }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200
    )
function solve(days){
    let money = 0;
    let firstBitcoinGot = 0;
    let bitcoins = 0;
    for(let i=1;i <= days.length;i++){
        let moneyDay = Number(days[i-1]) * 67.51;
        if(i % 3 == 0){
            moneyDay *= 0.7;
        }
        money += moneyDay;
        while(money >= 11949.16){
            bitcoins++;
            money -= 11949.16; 
            if(bitcoins == 1){
                firstBitcoinGot = i;
            }
        }
    }
    console.log("Bought bitcoins:",bitcoins);
    if(bitcoins > 0){
        console.log("Day of the first purchased bitcoin:",firstBitcoinGot); 
    }
   
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124])

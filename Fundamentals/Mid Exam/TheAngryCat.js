function angryCat(prices,entry,command){
    let leftSum = 0;
    let rightSum = 0;
    let entryNumber = prices[entry];
    for(let i=0;i < entry;i++){
        if(command == "cheap"){
            if(prices[i] < entryNumber){
                leftSum += prices[i];
            }
        }else if(command == "expensive"){
            if(prices[i] >= entryNumber){
                leftSum += prices[i];
            }
        }
    }
    for(let i = entry +1;i < prices.length;i++){
        if(command == "cheap"){
            if(prices[i] < entryNumber){
                rightSum += prices[i];
            }
        }else if(command == "expensive"){
            if(prices[i] >= entryNumber){
                rightSum += prices[i];
            }
        }
    }
    if(leftSum > rightSum){
        console.log(`Left - ${leftSum}`);
    }else if(rightSum > leftSum){
        console.log(`Right - ${rightSum}`);
    }else {
        console.log(`Left - ${leftSum}`);
    }
}
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

    7,
    
    "expensive")
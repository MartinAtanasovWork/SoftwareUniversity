function solve(string){
    let pattern = /^.{0,4}(?<symbol>[@#$^]){6,10}.{0,4}[@#$^]{6,10}.{0,4}$/
    let jackpotPattern = /^(?<symbol>[@#$^]){20}$/;
    let tickets = string.split(/[, ]/);
    for(let ticket of tickets){
        if(ticket != ""){
            
            let isWinning = pattern.exec(ticket);
            let isjackpoting = jackpotPattern.exec(ticket);
            
            if(ticket.length != 20)
            {
                console.log("invalid ticket");
            }else if(isjackpoting !== null){
                console.log(`ticket "${ticket}" - 10${isjackpoting.groups.symbol} Jackpot!`);
            }else if(isWinning !== null){
                console.log(`ticket "${ticket}" - 6${isWinning.groups.symbol}`);
            }else{
                console.log(`ticket "${ticket}" - no match`);
            }
        }
    }     
}
solve("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
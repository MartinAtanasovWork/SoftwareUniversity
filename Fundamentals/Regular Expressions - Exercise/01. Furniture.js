function furniture(input){
    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d+)!(?<qtty>\d+)/;  
    let totalSum = 0;
    let command = input.shift();
    console.log("Bought furniture:");
    while(command != "Purchase"){
        let match = pattern.exec(command);
        if(match !== null){
            console.log(match.groups.name);
            totalSum += Number(match.groups.price) * Number(match.groups.qtty);
        }
        command = input.shift();
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Az<<102.0!6',
           ">>TEvision<<12!8", 
           ">>TEvision<<12!8",
           'Purchase']
)
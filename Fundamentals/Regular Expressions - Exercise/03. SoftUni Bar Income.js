function softuniBarIncome(arr){
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.0-9]*\|(?<count>[0-9]+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let totalIncome = 0;

    let command = arr.shift();

    while(command != "end of shift"){
        let match = pattern.exec(command);
        if(match !== null){
            let {name,product,count,price} = match.groups;
            let itemPrice = Number(count) * Number(price);
            console.log(`${name}: ${product} - ${itemPrice.toFixed(2)}`);

            totalIncome += itemPrice;
        }    
        command = arr.shift(); 
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)
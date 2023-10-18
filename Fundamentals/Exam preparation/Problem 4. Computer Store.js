function solve(arr){
    let price = 0;
    let taxes = 0;
    let priceWithoutTaxes = 0;
    for(let i=0;i < arr.length;i++){
        if(arr[i] == "special"){
            if(price == 0){
                console.log("Invalid order!");
                return;
            }
            priceWithoutTaxes = price;
            taxes = price * 0.2;
            price += taxes;
            price *= 0.9;
        }else if(arr[i] == "regular"){
            if(price == 0){
                console.log("Invalid order!");
                return;
            }
            priceWithoutTaxes = price;
            taxes = price * 0.2;
            price += taxes;
        }else{
            if(Number(arr[i] > 0)){
                price += Number(arr[i]);
            }else{
                console.log("Invalid price!");
            }
        }
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${(priceWithoutTaxes).toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${price.toFixed(2)}$`);
}
solve(([

    'regular'
    
    ]))

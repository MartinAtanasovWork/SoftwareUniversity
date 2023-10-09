function carWash(arr){
    let cleanPercent = 0;
    for(let i=0;i < arr.length;i++){
        let action = arr[i];
        if(action == "soap"){
            cleanPercent += 10;
        }else if(action == "water"){
            cleanPercent *= 1.2;
        }else if(action == 'vacuum cleaner'){
            cleanPercent *= 1.25;
        }else {
            cleanPercent *= 0.9;
        }
        if(cleanPercent > 100){
            cleanPercent = 100;
        }
        if(cleanPercent < 0){
            cleanPercent = 0;
        }
    }
    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
'water']
)
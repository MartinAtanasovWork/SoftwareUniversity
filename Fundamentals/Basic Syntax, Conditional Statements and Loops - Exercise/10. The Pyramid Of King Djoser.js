function solve(base,increment){
    let stone = 0;
    let marble =0;
    let lapis =0;
    let gold =0;
    let heigth = 1;
    while(base > 2){
       
        if(heigth % 5 == 0){
            stone += (base - 2) ** 2;
            lapis += base * 2 + (base -2) *2;
        }else{
            stone += (base - 2) ** 2;
            marble += base * 2 + (base - 2) * 2;
        }
        base -=2;
        heigth++;
    }
    if(base == 1){
        gold =1;
    }else if(base == 2){
        gold = 4;
    }
    stone *= increment;
    marble *= increment;
    lapis *= increment;
    gold *= increment;
    heigth *= increment;
    console.log("Stone required:",stone.toFixed(0));
    console.log("Marble required:",marble.toFixed(0));
    console.log("Lapis Lazuli required:",lapis.toFixed(0));
    console.log("Gold required:",gold.toFixed(0));
    console.log("Final pyramid height:",Math.floor(heigth));
}
solve(23,
    0.5
   
    )
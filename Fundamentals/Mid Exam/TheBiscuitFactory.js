function biscuitFactory(arr){
    let biscuitsPerDay = Number(arr[0]);
    let workers = Number(arr[1]);
    let competitive = Number(arr[2]);
    let producedBiscuits = 0;
    for(let i=1;i <=30;i++){
        if(i % 3 == 0){
            producedBiscuits += Math.floor(biscuitsPerDay * 0.75 * workers);
        }else{
            producedBiscuits += biscuitsPerDay * workers;
        }
    }
     console.log(`You have produced ${producedBiscuits} biscuits for the past month.`);
    if(producedBiscuits > competitive){
        let comparison  = (producedBiscuits - competitive) * 100 / competitive;
        console.log(`You produce ${comparison.toFixed(2)} percent more biscuits.`);
    }else{
        let comparison  = (competitive - producedBiscuits) * 100 / competitive;
        console.log(`You produce ${comparison.toFixed(2)} percent less biscuits.`);
    }
   
}

biscuitFactory(["65",

"12",

"26000"])
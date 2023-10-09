function radioCrystals(arr){
    let perfect = arr[0];
    for(let i =1;i < arr.length;i++){
        let crystal = arr[i];
        let actionTimes = 0;
        let previousAction = neededAction(crystal,perfect);
        console.log("Processing chunk " +crystal +" microns");
        while(crystal != perfect){
            let action = neededAction(crystal,perfect);
            if(action == previousAction){
                actionTimes ++;
            }else{ 
                crystal = Math.floor(crystal);
                if(actionTimes > 0){
                    console.log(`${previousAction} x${actionTimes}`);
                    if(crystal != perfect){
                        console.log('Transporting and washing');
                    }
                }
                previousAction = action;
                actionTimes = 1;
            }
            crystal = doAction(crystal,action);
        }
        if(previousAction == "X-ray"){
            console.log(previousAction + ` x${actionTimes}`);
        }else{
            console.log(previousAction + ` x${actionTimes}`);
            console.log("Transporting and washing");
        }
      
        console.log(`Finished crystal ${perfect} microns`);
    }
    function neededAction(crystal,neededThickness){
        if(crystal / 4 >= neededThickness -1){
            return "Cut";
        }else if(crystal * 0.8 >= neededThickness -1){
            return "Lap";
        }else if(crystal - 20 >= neededThickness -1){
            return "Grind";
        }else if(crystal - 2 >= neededThickness -1){
            return "Etch";
        }else if(crystal + 1 == neededThickness){
            return "X-ray";
        }
    }
    function doAction(crystal,action){
        if(action == "Cut"){
            return crystal / 4;
        }else if(action == "Lap"){
            return crystal * 0.8;
        }else if(action == "Grind"){
            return crystal - 20;
        }else if(action == "Etch"){
            return crystal -2;
        }else if(action == "X-ray"){
            return crystal + 1;
        }
    }
}
radioCrystals([1375, 50000])
function shake(arr){
    let string = arr.shift();
    let patern = arr.shift();
    let string2,patern2,shakeable;
    let doneOnce = false;
    do{
        if(!doneOnce){
            doneOnce = true;
            [string2,patern2,shakeable] = shake(string,patern);
        }else{
            [string2,patern2,shakeable] = shake(string2,patern2);
        }
    }
    while(shakeable);

    console.log(string2);
    
    function shake(string,patern){
        if(patern == ""){
            return [string,"",false];
        }
        let newPatern = "";
        for(let i=0; i < patern.length;i++){
            if(i !== Math.floor(patern.length / 2)){
                newPatern += patern[i];
            }
        }

        if(string.indexOf(patern) !== string.lastIndexOf(patern)){
            let newString = "";
            newString += string.substring(0,string.indexOf(patern));
            newString += string.substring(string.indexOf(patern) + patern.length,string.lastIndexOf(patern));
            newString += string.substring(string.lastIndexOf(patern) + patern.length,string.length)
            console.log("Shaked it.");
            return [newString,newPatern,true];
        }else{
            if(string.indexOf(patern) >= 0){
                let newString = "";
                newString += string.substring(0, string.indexOf(patern));
                newString += string.substring(string.indexOf(patern) + patern.length, string.length);                
                console.log("Shaked it.");
                return [newString,newPatern,true];
            }else{
                console.log("No shake.");
                return [string,newPatern,false];
            }
            
        }
        
      
    }
}
shake(['mtmmmmtm',
'mtm'])
function netherRealms(string){
    let demonsInfoPattern = /[^ +]/gm;
    let demonsInfo = string.match(demonsInfoPattern).join("").split(",");
    let demons = {};
    for(let el of demonsInfo){
        let healthPattrn = /[^\d\+\-\*\/\.]/gm
        let healthChars = el.match(healthPattrn);
        let health = 0;
        for(let el of healthChars){
            health += el.charCodeAt();
        }


        let numberPattern = /[\+\-]?\d+\.*\d*/g;
        let numbers = el.match(numberPattern);
        let otherSymbolsPattern = /[*\\]/gm;
        let otherSymbols = el.match(otherSymbolsPattern);
        let dmg = 0;
        if(numbers === null){
            numbers = [0];
        }
        if(otherSymbols === null){
            otherSymbols = [];
        }
        for(let el of numbers){
            let num = 0;
            if(el[0] == "+"){
                num = Number(el.substring(1,el.length));
            }else if(el[0] == "-"){
                num = Number(el.substring(1,el.length)) * -1;
            }else{
                num = Number(el);
            }
            dmg += num;
        }
        for(let el of otherSymbols){
            if(el == "*"){
                dmg *= 2;
            }else if(el == "/"){
                dmg /=2;
            }
        }
        demons[el] = [health,dmg];
    }  
    let entries = Object.entries(demons);
    let sortedEntries = entries.sort((a,b) => a[0].localeCompare(b[0]));
    demons = Object.fromEntries(sortedEntries);
    
    for(let [key,value] of Object.entries(demons)){
        console.log(`${key} - ${value[0]} health, ${value[1].toFixed(2)} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel')
netherRealms("Gos/ho")
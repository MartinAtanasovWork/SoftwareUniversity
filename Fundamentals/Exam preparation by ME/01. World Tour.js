function solve(arr){
    let stops = arr.shift();
    for(let el of arr){
        if(el == "Travel"){
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let tokens = el.split(":");
        let command = tokens.shift();
        switch(command){
            case "Add Stop":
            let [index,stop] = tokens;
            if(index >= 0 && index < stops.length){
                let newMsg = stops.substring(0,index) + stop + stops.substring(index,stops.length);
                stops = newMsg;
            }
            console.log(stops);
            break;
            case "Remove Stop":
            let [startIndex,endIndex] = tokens;
            if(startIndex >= 0 && startIndex < stops.length && endIndex >=0 && endIndex < stops.length){
                let word = "";
                for(let i = startIndex;i <= endIndex;i++){
                    word += stops[i];
                }
                let newMsg = stops.replace(word,"");
                stops = newMsg;
            }
            console.log(stops);
            break;
            case "Switch":
            let [oldStr,newStr] = tokens;
            let newStops = stops.split(oldStr).join(newStr);
            stops = newStops;  
            console.log(stops);           
            break;
        }  
    }
}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])



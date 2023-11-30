function solve(arr){
    let n = arr.shift();
    let plants = {};
    for(let i=0;i < n;i++){
        let [name,rarity] = arr.shift().split("<->");
        if(name in plants){
            plants[name][0] = {"rarity":rarity};
        }else{
            plants[name] = [{rarity}];
        }
    }

    for(let info of arr){
        if(info == "Exhibition"){
            break;
        }
        let tokens = info.split(": ");
        let command = tokens.shift();
        if(command == "Rate"){
            let [name,rating] = tokens[0].split(" - ");
            
            if(name in plants){
                if(plants[name][1] == undefined){
                    plants[name][1] = [rating];
                }else{
                    plants[name][1].push(rating)
                }
            }else{
                console.log("error");
            }
        }else if(command == "Update"){
            let [name,rarity] = tokens[0].split(" - ");

            if(name in plants){
                plants[name][0] = {"rarity": rarity};
            }else{
                console.log("error");
            }

        }else if(command == "Reset"){
            let name = tokens[0];

            if(name in plants){
                plants[name][1] = [];
            }else{
                console.log("error");
            }
        }
        
    }
    console.log("Plants for the exhibition:");
    for(let [key,value] of Object.entries(plants)){
        let averageRating = 0;
        if(value[1] != undefined){
            for(let i =0;i < value[1].length;i++){
                averageRating += Number(value[1][i]);
            }
            if(averageRating != 0){
                averageRating /= value[1].length; 
            }
        }
        
        
        for(let values of Object.values(value[0])){
            console.log(` - ${key}; Rarity: ${values}; Rating: ${averageRating.toFixed(2)}`);
        }      
    }
}
solve(["3",
"Candelabra<->10",
"Oahu<->10",
"Oahu<->5",
"Rate: Oahu - 3",
"Rate: Candelabra - 6",
"Exhibition"])

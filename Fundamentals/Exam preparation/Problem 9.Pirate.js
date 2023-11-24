function pirate(arr){
    let cities = {};
    for(let info of arr){
        if(info == "Sail"){
            break;
        }
        let [name,population,gold] = info.split("||");
        if(name in cities){
            cities[name][0] += Number(population);
            cities[name][1] += Number(gold); 
        }else
        cities[name] = [Number(population),Number(gold)];
    }

    for(let i = arr.indexOf("Sail") + 1; i < arr.indexOf("End");i++){
        let tokens = arr[i].split("=>");
        let command = tokens.shift();
        if(command == "Plunder"){
            let [city,people,gold] = tokens;
            cities[city][0] -= people;
            cities[city][1] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if(cities[city][0] == 0 || cities[city][1] == 0){
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }

        }else if(command == "Prosper"){
            let [city,gold] = tokens;
            if(city in cities){
                if(gold >= 0){
                    cities[city][1] += Number(gold);
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
                }else{
                    console.log('Gold added cannot be a negative number!');
                }
            }
        }
    }
    if(Object.keys(cities).length > 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for(let [key,value] of Object.entries(cities)){
            console.log(`${key} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`);
        }
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirate(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])
function solve(arr){
    let leaders = {};

    for(let command of arr){
        let leader = "";
        let army = "";
        let armyCount = 0;
        let comm = "";
        if(command.includes(":")){
            let tokens = command.split(": ");
            leader = tokens[0];
            [army,armyCount] = tokens[1].split(", ");
            armyCount = Number(armyCount);
        }else if(command.includes("+")){
            let tokens = command.split(" + ");
            army = tokens[0];
            armyCount = Number(tokens[1]);
        }else{
            let tokens = command.split(" ");
            leader = tokens[0];
            comm = tokens[1];
        }
        
        if(comm == "arrives"){
            if(!(leader in leaders)){
                leaders[leader] = {};
            }
        }else if(comm == "defeated"){
            if(leader in leaders){
                delete leaders[leader];
            }
        }

        if(command.includes(":")){
            if(leader in leaders){
                leaders[leader][army] = Number(armyCount);
            }
        }

        if(command.includes("+")){
            for(let [key,value] of Object.entries(leaders)){
                for(let [key1,value1] of Object.entries(value)){
                    if(key1 == army){
                        leaders[key][key1] += Number(armyCount);
                    }
                }
            }
        }
    }
    let entries = Object.entries(leaders);
    let sorted = entries.sort((a,b) => b[1][Object.keys(b[1])[0]] - a[1][Object.keys(a[1])[0]]);
    leaders = Object.fromEntries(sorted);
    for(let [key,value] of Object.entries(leaders)){
        let count = 0;
        for(let [key1,value1] of Object.entries(value)){
            count += value1;
        }
        console.log(`${key}: ${count}`);
        for(let [key1,value1] of Object.entries(value)){
            console.log(`>>> ${key1} - ${value1}`);
        }
    }

}
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])
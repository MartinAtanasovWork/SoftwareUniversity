function airPollution(arrMap,commands){
    let map = [];
    for(let i=0;i < 5;i++){
       map.push(arrMap[i].split(" ").map(Number));
    }
    for(let i=0;i < commands.length;i++){
        let [command,num] = commands[i].split(" ");
        num = Number(num);
        if(command == "breeze"){
            for(let i=0;i < 5;i++){
                map[num][i] -= 15;
                if(map[num][i] < 0){
                    map[num][i] = 0;
                }
            }
        }else if(command == "gale"){
            for(let i=0;i < 5;i++){
                map[i][num] -= 20;
                if(map[i][num] < 0){
                    map[i][num] = 0;
                }
            }
        }else if(command == "smog"){
            for(let i=0;i < 5;i++){
                for(let j=0;j < 5;j++){
                    map[i][j] += num;
                }
            }
        }
    }
    let pollutedAreas = [];
    for(let i=0;i < 5;i++){
        for(let j=0;j < 5;j++){
            if(map[i][j] >= 50){
                pollutedAreas.push(`[${i}-${j}]`)
            }
        }
    }
    if(pollutedAreas.length > 0){
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    }else{
        console.log(`No polluted areas`);
    }
}
airPollution(['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35']
)
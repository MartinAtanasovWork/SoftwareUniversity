function miner(arr){
    let resourcess = {};
    for(let i=0;i < arr.length;i+=2){
        let resource = arr[i];
        let count = Number(arr[i+1]);
        if(resource in resourcess){
            resourcess[resource] += count;
        }else{
            resourcess[resource] = count;
        }
    }
    for(let [key,value] of Object.entries(resourcess)){
        console.log(key,"->",value);
    }
}
miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )
function solve(obj){
    let returnObj = {};
    returnObj["model"] = obj.model;
    if(obj.power >= 200){
        returnObj["engine"] = { power: 200, volume: 3500};
    }else if(obj.power >= 120){
        returnObj.engine = {power : 120, volume: 2400};
    }else{
        returnObj.engine = { power: 90, volume: 1800 };
    }
    returnObj["carriage"] = { type: obj.carriage,color:obj.color};
    if(obj.wheelsize %2 == 0){
        obj.wheelsize --;
    }
    returnObj.wheels = [obj.wheelsize,obj.wheelsize,obj.wheelsize,obj.wheelsize];
    return returnObj;
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))

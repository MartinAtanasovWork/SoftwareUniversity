function garage(arr){
    let garage = {};
    for(let el of arr){
        let [num,info] = el.split(" - ");
        let infoArr = info.split(", ");
        
        let objInfo = {};
        for(let el of infoArr){
            let [key,value] = el.split(": ");
            objInfo[key] = value;
        }        
        if(garage[num] == undefined){
            garage[num] = [objInfo];
        }else{
            garage[num].push(objInfo);
        }
       
    }
    for(let [key,value] of Object.entries(garage)){
        console.log(`Garage № ${key}`);
        for(let el of value){
            let print = "--- ";
            for(let [key1,value1] of Object.entries(el)){
                print += `${key1} - ${value1}, `
            }
            console.log(print.substring(0,print.length-2));
        }
    }

}
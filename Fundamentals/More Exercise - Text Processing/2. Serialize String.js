function serializeString(arr){
    let string = arr[0];
    let unique = {};
    for(let i=0;i < string.length;i++){
        if(string[i] in unique){
            unique[string[i]].push(i);
        }else{
            unique[string[i]] = [i];
        }
    }
    for(let [key,value] of Object.entries(unique)){
        let print = `${key}:`;
        for(let el of value){
            print += `${el}/`;
        }
        console.log(print.substring(0,print.length - 1));
    }
}
serializeString(["avjavamsdmcalsdm"])
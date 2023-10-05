function solve(thing,count){
    console.log((Price(thing) * count).toFixed(2));
    function Price(item){
        if(item == 'coffee'){
            return 1.5;
        }else if(item == 'water'){
            return 1;
        }else if(item == "coke"){
            return 1.4;
        }else if(item == "snacks"){
            return 2;
        }
    }
}
solve("water",5)

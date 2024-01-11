function solve(num,op1,op2,op3,op4,op5){
    num = Number(num);
    let a = [op1,op2,op3,op4,op5];
    for(let el of a){
        if(el == "chop"){
            num /= 2;
            console.log(num);
        }else if(el == "dice"){
            num = Math.sqrt(num);
            console.log(num);
        }else if(el == "spice"){
            num ++;
            console.log(num);
        }else if(el == "bake"){
            num *= 3;
            console.log(num); 
        }else if(el == "fillet"){
            num *= 0.8;
            console.log(num); 
        }
    } 
}
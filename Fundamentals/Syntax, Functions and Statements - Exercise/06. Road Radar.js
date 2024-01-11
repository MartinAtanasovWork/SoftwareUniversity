function solve(km,zone){
    if(zone == "motorway"){
        if(km > 130){
            if(km - 130 <= 20){
                console.log(`The speed is ${km - 130} km/h faster than the allowed speed of 130 - speeding`);
            }else if(km - 130 <= 40){
                console.log(`The speed is ${km - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            }else{
                console.log(`The speed is ${km - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }
        }else{
            console.log(`Driving ${km} km/h in a ${130} zone`);
        }
    }else if(zone == "interstate"){
        if(km > 90){
            if(km - 90 <= 20){
                console.log(`The speed is ${km - 90} km/h faster than the allowed speed of 90 - speeding`);
            }else if(km - 90 <= 40){
                console.log(`The speed is ${km - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            }else{
                console.log(`The speed is ${km - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }
        }else{
            console.log(`Driving ${km} km/h in a ${90} zone`);
        }
    }else if(zone == "city"){
        if(km > 50){
            if(km - 50 <= 20){
                console.log(`The speed is ${km - 50} km/h faster than the allowed speed of 50 - speeding`);
            }else if(km - 50 <= 40){
                console.log(`The speed is ${km - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            }else{
                console.log(`The speed is ${km - 50} km/h faster than the allowed speed of 50 - reckless driving`);
            }
        }else{
            console.log(`Driving ${km} km/h in a ${50} zone`);
        }
    }else if(zone == "residential"){
        if(km > 20){
            if(km - 20 <= 20){
                console.log(`The speed is ${km - 20} km/h faster than the allowed speed of 20 - speeding`);
            }else if(km - 20 <= 40){
                console.log(`The speed is ${km - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            }else{
                console.log(`The speed is ${km - 20} km/h faster than the allowed speed of 20 - reckless driving`);
            }
        }else{
            console.log(`Driving ${km} km/h in a ${20} zone`);
        }
    }
}
solve(21, 'residential')
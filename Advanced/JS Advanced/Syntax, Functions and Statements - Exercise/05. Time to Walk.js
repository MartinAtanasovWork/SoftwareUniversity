function solve(steps,mperstep,kmh){
    let m = steps * mperstep;
    let speedMS = kmh / 3.6;
    
    let time = m / speedMS;
    let rest = Math.floor(m / 500);

    let totalTime = time + rest * 60;
    let hours = Math.floor(totalTime / 60 / 60);
    let mins = Math.floor((totalTime % 3600) / 60);
    let secondsFin = Math.round(totalTime % 60); 

    if(hours < 10 && mins < 10){
        console.log(`${hours == 0 ? "00" : "0" + hours}:${mins == 0? "00" : "0" + mins}:${secondsFin}`);
    }else if(hours < 10 && mins >= 10){
        console.log(`${hours == 0 ? "00" : "0" + hours}:${mins == 0? "00" : mins}:${secondsFin}`);
    }else if(hours >= 10 && mins < 10){
        console.log(`${hours == 0 ? "00" : hours}:${mins == 0? "00" : "0" + mins}:${secondsFin}`);
    }
   
}
solve(8000, 0.50, 4)

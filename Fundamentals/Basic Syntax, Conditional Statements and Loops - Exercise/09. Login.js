function solve(arr){
    let password = arr.shift();
    let times =0;
    let length = arr.length;
    for(let i=0;i < arr.length;i++){
        if(password == arr[i].split("").reverse().join("")){
            console.log(`User ${password} logged in.`);
        }else{
            times ++;
            
            if(times > 3){
                console.log(`User ${password} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}solve(['sunny','rainy','cloudy','sunny','ynnus'])
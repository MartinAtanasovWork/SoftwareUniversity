function buildWall(arr){
    let concrete = 0;
    let dayUsage = [];
    while(true){
        let day = 0;
        for(let i=0;i < arr.length;i++){
            if(arr[i] < 30){
                arr[i]++;
                day += 195;
                concrete += 195;
            }
        }
        if(day == 0){
            break;
        }else{
            dayUsage.push(day);
        }
    }
    console.log(dayUsage.join(", "));
    console.log(`${concrete*1900} pesos`);
}
buildWall([21, 25, 28]);
function bombNumbers(arr,info){
    let bombNumber = info[0];
    let power = info[1];
    for(let i =0;i < arr.length;i++){
        if(arr[i] == bombNumber){
            if(i - power >= 0){
                arr.splice(i - power,power);
            }else{
                arr.splice(0,power)
            }
            if(i - power >= 0){
                arr.splice(i- power,power + 1);
            }else{
                arr.splice(0,power)
            }
          i = 0;
        }
    }
    let sum = 0;
    for(let el of arr){
        sum += el;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2]
)
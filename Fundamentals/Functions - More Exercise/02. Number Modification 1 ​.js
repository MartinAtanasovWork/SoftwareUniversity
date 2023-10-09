function numberModify(number){
    let numberString = number.toString();
    let average = 0;
    while(average <= 5){
        average = 0;
        for(let i = 0;i< numberString.length;i++){
            average += Number(numberString[i]);
        } 
        average /= numberString.length;    
        if(average <= 5){
            numberString += "9";
        }
     }
     console.log(numberString);
}
numberModify(101);
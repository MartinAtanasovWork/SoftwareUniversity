function check(num1,num2,num3){
    console.log(isNegative(num1,num2,num3));

    function isNegative(n1,n2,n3){
        let negatives = 0;
        if(n1 < 0){
            negatives++;
        }
        if(n2 < 0){
            negatives++;
        }
        if(n3 < 0){
            negatives++;
        }
        if(negatives % 2 != 0){
            return "Negative";
        }else{
            return "Positive";
        }
    }
}
check(1,-1,-1)
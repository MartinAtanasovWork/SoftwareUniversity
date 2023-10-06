function CheckPolindrome(arr){
    for(let i = 0;i < arr.length;i++){
        let num = arr[i];
        let polindrome = "";
        let numAsString = num.toString();
        for(let j = numAsString.length - 1;j >= 0;j--){
            polindrome += numAsString[j];
        }
        if(num == Number(polindrome)){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
CheckPolindrome([123,24,101])
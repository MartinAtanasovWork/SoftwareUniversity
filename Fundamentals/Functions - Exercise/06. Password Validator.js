function ValidatePassword(password){
    PrintResult(password)
    
     function PrintResult(str){
            if(isLengthBetween6And10(str) && isNotSpecialChar(str) && areIntegersMoreThan2(str)){
                console.log("Password is valid");
            }else{
                if(!(isLengthBetween6And10(str))){
                    console.log("Password must be between 6 and 10 characters");
                }
                if(!(isNotSpecialChar(str))){
                    console.log("Password must consist only of letters and digits");
                }
                if(!(areIntegersMoreThan2(str))){
                    console.log("Password must have at least 2 digits");
                }
            }        
        }
    
    function isLengthBetween6And10(str){
        let length = str.length;
        if(length > 5 && length < 11){
         return true;
        }else{
         return false;
        }
    }

    function areIntegersMoreThan2(str){
        let integers = 0;
        for(let i = 0;i < str.length;i++){
            if(str[i].charCodeAt(0) > 47 && str[i].charCodeAt(0) < 58){
                integers++;
            }
        }
        if(!(integers >= 2)){
            return false;
        }else{
            return true;
        }
    }
  
    function isNotSpecialChar(str){
        for(let i = 0;i < str.length;i++){
            let symbol =str[i];
            if((symbol.charCodeAt(0) > 47 && symbol.charCodeAt(0) < 58) || (symbol.charCodeAt(0) > 64 && symbol.charCodeAt(0) < 91) || (symbol.charCodeAt(0) > 96 && symbol.charCodeAt(0) < 123))
            {   
            }else{
               return false;
            }
        }
        return true;
    }
}
ValidatePassword("Pa$s$s")

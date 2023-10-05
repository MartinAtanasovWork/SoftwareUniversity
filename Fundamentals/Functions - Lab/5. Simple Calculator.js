function calculator(num1,num2,action){
    console.log(calculate(num1,num2,action));
    function calculate(n1,n2,action){
        if(action == "multiply"){
            return n1 * n2;
        }else if(action == "divide"){
            return n1 / n2;
        }else if(action == "add"){
            return n1 + n2;
        }else if(action == "subtract"){
            return n1 - n2;
        }
    }
}
calculator(1,1,"add")
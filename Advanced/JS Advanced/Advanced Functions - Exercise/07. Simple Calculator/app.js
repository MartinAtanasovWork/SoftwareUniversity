function calculator () {
    let num1;
    let num2;
    let resultElement;
    let calcObj = {
        init(selector1,selector2,resultSelector){
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            console.log(num1,num2);
            resultElement = document.querySelector(resultSelector);
        },
        add(){
            resultElement.value = Number(num1.value) + Number(num2.value);
        },
        subtract(){
            resultElement.value = Number(num1.value) - Number(num2.value);
        }
    };

    return calcObj;
} 

function solve(operand1,operation,operand2){
    switch(operation){
        case "+":
            console.log((operand1 + operand2).toFixed(2));
        break;
        case "-":
            console.log((operand1 - operand2).toFixed(2));
        break;
       case "*":
        console.log((operand1 * operand2).toFixed(2));
        break;
       case "/":
        console.log((operand1 / operand2).toFixed(2));
        break;           
    }
}
solve(5,
    '+',
    10)
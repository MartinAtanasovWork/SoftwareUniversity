function solve(a,b,oper){
    switch(oper){
        case "+":
        console.log(a + b);
        break;
        case "-":
        console.log(a - b);
        break;
        case "*":
        console.log(a * b);
        break;
        case "/":
        console.log(a / b);
        break;
        case "%":
        console.log(a % b);
        break;
        case "**":
        console.log(a ** b);
        break;         
    }
}
solve(1,2,"-")
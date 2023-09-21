function solve(first,second,third){
    let sum = first + second + third;
    let isFloat = false;
    if(sum % 1 != 0){
        isFloat = true;
    }
    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
solve(9, 100, 1)
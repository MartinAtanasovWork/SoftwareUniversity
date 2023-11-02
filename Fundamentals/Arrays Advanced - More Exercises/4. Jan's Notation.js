function notation(arr){
    let operands = [];
 
    for(let i=0;i < arr.length;i++){
        if(Number.isInteger(arr[i])){
            operands.push(arr[i]);
        }else{
                let operation = arr[i];
                if(operands.length < 2){
                    console.log("Error: not enough operands!");
                    return;
                }
                if(operation == "+"){
                  operands.push(operands.pop() + operands.pop());
                }else if(operation == "-"){
                  let result = [];
                  for(let i =0;i < operands.length - 2;i++){
                      result.push(operands[i])
                  }
                  let a = operands[operands.length -2];
                  let b =operands[operands.length - 1];
                  result.push(a - b);
                  operands = result;
                }else if(operation == "*"){
                  operands.push(operands.pop() * operands.pop());
                }else if(operation == "/"){
                  let result = [];
                  for(let i =0;i < operands.length - 2;i++){
                      result.push(operands[i])
                  }
                  let a = operands[operands.length -2];
                  let b =operands[operands.length - 1];
                  result.push(a / b);
                  operands = result;
                
              }
        }
    }    
    if(operands.length > 1){
        console.log("Error: too many operands!");
    }else {
        console.log(operands[0]);
    }
       
}
notation([15,
    '/']
    
    
    )
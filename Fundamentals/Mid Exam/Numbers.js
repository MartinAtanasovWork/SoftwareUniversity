function numbers(arr){
    let numbers = arr.shift().split(" ").map(Number);
   
    for(let i=0;i < arr.length;i++){
        let tokens = arr[i].split(" ");
        if(tokens[0] == "Add"){
            numbers.push(Number(tokens[1]))
        }else if(tokens[0] == "Remove"){
            let value = Number(tokens[1]);
            if(numbers.includes(value)){
                let index = numbers.indexOf(value);
                let newArr = [];
                for(let i =0;i < index;i++){
                    newArr.push(numbers[i]);
                }
                for(let i = index+ 1;i < numbers.length;i++){
                    newArr.push(numbers[i]);
                }
                numbers = newArr;
            }
        }else if(tokens[0] == "Replace"){
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);
            if(numbers.includes(value)){
                let index = numbers.indexOf(value);
                let newArr = [];
                for(let i =0;i < index;i++){
                    newArr.push(numbers[i]);
                }
                newArr.push(replacement);
                for(let i = index+ 1;i < numbers.length;i++){
                    newArr.push(numbers[i]);
                }
                numbers = newArr;
            }
        }else if(tokens[0] == "Collapse"){
            let value = Number(tokens[1]);
            let newArr = [];
            for(let el of numbers){
                if(el >= value){
                    newArr.push(el);
                }
            }
            numbers = newArr;
        }else if(tokens[0] == "Finish"){
            console.log(numbers.join(" "));
            return; 
        }
    }
    
}
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])
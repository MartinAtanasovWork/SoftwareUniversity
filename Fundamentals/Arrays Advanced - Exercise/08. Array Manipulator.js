function solve(arr,commnands){
for(let i=0;i < commnands.length;i++){
    let tokens = commnands[i].split(" ");
    let commnand = tokens[0];
    if(commnand == "add"){
        let index = Number(tokens[1]);
        let element = Number(tokens[2]);
        let newArr = [];
        if(index == arr.length){
            arr.push(element);
        }else{
            for(let i=0;i < arr.length;i++){
                if(i == index){
                    newArr.push(Number(element));
                }
                newArr.push(arr[i]);
            }
            arr = newArr;
        }    
        }else if(commnand == "addMany"){
            let index = Number(tokens[1]);
            let elements = [];
            let newArr = [];
            for(let i = 2;i < tokens.length;i++){
                elements.push(Number(tokens[i]));
            }
            for(let i=0;i < index;i++){
                newArr.push(arr[i]);
            }
            for(let el of elements){
                newArr.push(el);
            }
            for(let i= index;i < arr.length;i++){
                newArr.push(arr[i]);
            }
            arr = newArr;
        }else if(commnand == "contains"){
            let element = Number(tokens[1]);
            if(arr.includes(element)){
                for(let i =0;i < arr.length;i++){
                    if(arr[i] == element){
                        console.log(i);
                        break;
                    }
                }
            }else{
                console.log(-1);
            }
        }else if(commnand == "remove"){
            let index = Number(tokens[1]);
            arr.splice(index,1);
        }else if(commnand == "shift"){
            let positions = Number(tokens[1]);
            for(let i =0 ;i < positions;i++){
                arr.push(arr.shift());
            }

        }else if(commnand== "sumPairs"){
            let pairs = [];
            for(let i=0;i < arr.length;i+=2){
                let pair = arr[i] + arr[i+1];
                if(i + 1 >= arr.length){
                    pair = arr[i];
                }
                pairs.push(pair);
            }
            arr = pairs;
        }else if(commnand == "print"){
            console.log(`[ ${arr.join(", ")} ]`);
            return;
        }
    }
}
solve([1, 2, 3, 4, 5],
    ['add 5 5','print'])
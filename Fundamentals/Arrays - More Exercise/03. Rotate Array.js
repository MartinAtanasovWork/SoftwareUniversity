function solve(givenArr){
    let rotation = givenArr[givenArr.length - 1];
    let arr = [];
    for(let i =0;i < givenArr.length - 1;i++){
        arr.push(givenArr[i])
    } 
    for(let i = 0;i < rotation;i++){
        let newEl = arr[arr.length - 1];
        arr.pop();
        let newArr = [];
        for(let j = 0;j < arr.length;j++){
            newArr[j + 1] = arr[j]; 
        } 
        newArr[0] = newEl;
        arr = newArr;
    }
    console.log(arr.join(" "));
}
solve(['Banana', 'Orange', 'Coconut',
'Apple', '15']
)
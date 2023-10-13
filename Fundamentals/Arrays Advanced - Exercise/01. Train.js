function solve(arr){
    let wagons = arr.shift().split(" ").map(Number);
    let capacity =Number(arr.shift());
    for(let i =0;i< arr.length;i++){
        let tokens = arr[i].split(" ");
        if(tokens.length > 1){
            wagons.push(Number(tokens[1]));
        }else{
            for(let i=0;i<wagons.length;i++){
                if(wagons[i] + Number(tokens[0]) <= capacity){
                    wagons[i]+= Number(tokens[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])
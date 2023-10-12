function solve(arr){
    let newArr = arr.filter((x,i) => i % 2 == 1);
    console.log(newArr.map(x => x * 2).reverse().join(" "))
}
solve([10,15,20,25]);
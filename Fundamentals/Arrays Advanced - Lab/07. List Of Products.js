function solve(arr){
    let result = arr
    .sort()
    .map((x,i) => console.log(`${i+1}.${x}`))
}
solve(['Potatoes', 'Tomatoes', 'Onions',
'Apples']
)
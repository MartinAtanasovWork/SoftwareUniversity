function solve(arr){
    arr.sort((a,b) => a.localeCompare(b));
    arr.map((a,i) => console.log(`${i+1}.${a}`));
}
solve(["aaaa","bbbbbb","aabbbbb"])
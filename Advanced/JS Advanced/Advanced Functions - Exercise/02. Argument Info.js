function argInfo(...args){
    let argsArr = Array.from(args);
    let assArr = {};
    for(let arg of argsArr){
        console.log(`${typeof arg}: ${arg}`);
        if(typeof arg in assArr){
            assArr[typeof arg]++;
        }else{
            assArr[typeof arg] = 1;
        }
    }
    let entries = Object.entries(assArr);
    let sorted = entries.sort((a,b) => {
        return b[1] - a[1];
    })
    assArr = Object.fromEntries(sorted);
    for(let key in assArr){
        console.log(`${key} = ${assArr[key]}`);
    }
}
argInfo('cat', 42, function () { console.log('Hello world!'); },1)
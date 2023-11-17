function race(arr){
    let names = arr.shift().split(", ");

    let results = {};
    names.forEach(element => {
        results[element] = 0;
    });

    let command = arr.shift();
    let namePattern = /[A-Za-z]/gm;
    let scorePattern = /\d/gm;
    while(command != "end of race"){
        let name = command.match(namePattern).join("");
        let resultArr = command.match(scorePattern).map(Number);
        let result = resultArr.reduce((el,sum) => sum+=el);

        if(name in results){
            results[name] += Number(result);
        }
        command = arr.shift();
    }
    let entries = Object.entries(results);
    let sortedResults = entries.sort((a,b) => b[1] - a[1]);
    
    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy,Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)
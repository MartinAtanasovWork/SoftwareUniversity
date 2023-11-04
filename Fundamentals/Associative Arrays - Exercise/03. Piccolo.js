function piccolo(arr){
    let carNums = new Set();
    for(let el of arr){
        let [command,number] = el.split(", ");

        if(command == 'IN'){
            carNums.add(number);
        }else{
            carNums.delete(number);
        }
    }
    if(carNums.size === 0){
        console.log(`Parking Lot is Empty`);
    }else{
        let sorted = Array.from(carNums).sort((a,b) => a.localeCompare(b));
        for(let el of sorted){
            console.log(el);
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
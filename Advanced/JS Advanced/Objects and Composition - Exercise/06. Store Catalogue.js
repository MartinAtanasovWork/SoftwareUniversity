    function solve(arr){
        let catalogue = {};
        for(let el of arr){
            let [name,price] = el.split(" : ");
            price = Number(price);
            let letter = name[0];
            if(letter in catalogue){
                catalogue[letter][name] = price;
            }else{
                catalogue[letter] = {[name]:price};
            }
        }
        let entries = Object.entries(catalogue);
        let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]));
        catalogue = Object.fromEntries(sorted);
        for(let [key,value] of Object.entries(catalogue)){
            console.log(key);
            let entries1 = Object.entries(value);
            let sortedEntries = entries1.sort((a,b) => a[0].localeCompare(b[0]));
            for(let [key1,value1] of sortedEntries){
                console.log(`  ${key1}: ${value1}`); 
            }
        }
    }
    solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    )
    
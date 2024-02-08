function solve(arr){
    let juices = new Map();
    let bottles = new Map();
    let bottleOrder = [];

    for(let el of arr){
        let tokens = el.split(" => ");
        let name = tokens[0];
        let qtty = Number(tokens[1]);

        if(juices.has(name)){
            juices.set(name, juices.get(name) + qtty);
        } else {
            juices.set(name, qtty);
        }

           if (juices.get(name) >= 1000) {
            bottles.set(name, (bottles.get(name) || 0) + Math.floor(juices.get(name) / 1000));
            juices.set(name, juices.get(name) % 1000);
            if (!bottleOrder.includes(name)) {
                bottleOrder.push(name); 
            }
        }
    }
    
    for(let juice of bottleOrder){
        const bottleCount = bottles.get(juice);
        if (bottleCount > 0) {
            console.log(`${juice} => ${bottleCount}`);
        }
    }
}

solve([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"
]);


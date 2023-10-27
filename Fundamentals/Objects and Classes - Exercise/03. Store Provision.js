function store(stock,ordered){
    let storage = {};
    for(let i=0;i < stock.length;i+=2){
        let name = stock[i];
        let count = Number(stock[i+1]);
        storage[name] =  count;
    }

    for(let i=0;i < ordered.length;i+=2){
        let name = ordered[i];
        let count = Number(ordered[i+1]);
        
        if(name in storage){
            storage[name] += count;
        }else{
            storage[name] = count;
        }
    }
    for(let key in storage){
        console.log(key,"->",storage[key]);
    }
}function store(stock,ordered){
    let storage = {};
    for(let i=0;i < stock.length;i+=2){
        let name = stock[i];
        let count = Number(stock[i+1]);
        storage[name] =  count;
    }

    for(let i=0;i < ordered.length;i+=2){
        let name = ordered[i];
        let count = Number(ordered[i+1]);
        
        if(name in storage){
            storage[name] += count;
        }else{
            storage[name] = count;
        }
    }
    for(let key in storage){
        console.log(key,"->",storage[key]);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )
function solve(arr){
    let cars = new Map();

    for(let el of arr){
        let [brand,model,carsCount] = el.split(" | ");

        if(cars.has(brand)){
            if(cars.get(brand).has(model)){
                cars.get(brand).set(model,cars.get(brand).get(model) + Number(carsCount));
            }else{
                cars.get(brand).set(model,Number(carsCount));
            }
        }else{
            cars.set(brand,new Map());
            cars.get(brand).set(model,Number(carsCount));
        }
    }

    for(let [key,value] of cars){
        console.log(key);
        for(let [key1,value1] of value){
            console.log(`###${key1} -> ${value1}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
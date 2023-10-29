class Storage{
    capacity = 0;
    totalCost = 0;
    storage = [];
    constructor(capacity){
        this.capacity = capacity;
    }
    addProduct(productInfo){
            this.storage[this.storage.length] = {name:productInfo.name,price:productInfo.price,quantity:productInfo.quantity};
            this.capacity -= productInfo.quantity;
            this.totalCost += productInfo.quantity * productInfo.price;
    }
    getProducts(){
        let print = [];
        for(let item of this.storage){
            print.push(JSON.stringify(item));
        }
        return print.join("\n");
    }
}
let productOne = {name: 'Cucamber',
price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato',
price: 0.90, quantity: 25};
let productThree = {name: 'Bread',
price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
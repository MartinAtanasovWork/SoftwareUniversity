function cats(arr){

    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        Meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    

    for(let i=0;i < arr.length;i++){
        let cats = arr[i].split(" ");
        let name = cats[0];
        let age = Number(cats[1]);
        let cat = new Cat(name,age);
        cat.Meow();
        }

   
}
cats(['Mellow 2', 'Tom 5']);
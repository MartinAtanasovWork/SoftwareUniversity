function createPerson(firstName,lastName){
    let obj ={
        firstName,
        lastName,
        get fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        set fullName(value){
            let tokens = value.split(" ");
            
            if(tokens.length == 2){
                this.firstName = tokens[0];
                this.lastName = tokens[1];
            }
        }
    }
    return obj;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

class Hex{
    value;

    constructor(value){
        this.value = value; 
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return "0x" + this.value.toString(16).toUpperCase();
    }
    plus(number){
        let newVal = 0;
        if(Number.isInteger(number)){
            newVal = this.value + number;
        }else{
            newVal = this.value + number.value;
        }
        return new Hex(newVal);
    }
    minus(number){
        let newVal = 0;
        if(Number.isInteger(number)){
            newVal = this.value - number;
        }else{
            newVal = this.value - number.value;
        }
        return new Hex(newVal); 
    }
    parse(string){
        return parseInt(string,16);       
    }
}

let FF = new Hex(255);

let act = FF.toString();
let exp = "0xFF";

let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";

//assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
//assert.equal(act3,exp3);
console.log(new Hex(5).toString());
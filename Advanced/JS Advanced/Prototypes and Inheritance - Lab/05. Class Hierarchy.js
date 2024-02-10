function Hierarchy(){
  

class Figure{
    units = "cm";

    get area(){
        return;
    }        
    changeUnits(newUnits){
        this.units = newUnits;
    }
    toString(){
        return `Figures units: ${this.units}`
    }
}

class Circle extends Figure{
    radius;
    constructor(r){
        super();
        this.radius = r;
    }
    get area(){
        return Math.PI * this.radius * this.radius;         
    }
    changeUnits(newUnits){
        
        if(newUnits == "mm" && this.units == "cm"){
            this.radius *= 10;
        }
        if(newUnits == "m" && this.units == "cm"){
            this.radius /= 10;
        }
        if(newUnits == "cm" && this.units == "mm"){
            this.radius /= 10; 
        }
        if(newUnits == "m" && this.units == "mm"){
            this.radius /= 100;
        }
        if(newUnits == "cm" && this.units == "m"){
            this.radius *= 10;
        }
        if(newUnits == "mm" && this.units == "m"){
            this.radius *= 100;
        }
        this.units = newUnits;
    }
    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
    }
}

class Rectangle extends Figure{
    width;
    height;
    constructor(width,height,newUnits){
        super();
        this.height = height;
        this.width = width;
        this.changeUnits(newUnits);
    }
    changeUnits(newUnits){

        if(newUnits == "mm" && this.units == "cm"){
            this.width *= 10;
            this.height *= 10;
        }
        if(newUnits == "m" && this.units == "cm"){
            this.width /= 10;
            this.height /= 10;
        }
        if(newUnits == "cm" && this.units == "mm"){
            this.width /= 10;
            this.height /= 10;
        }
        if(newUnits == "m" && this.units == "mm"){
            this.width /= 100;
            this.height /= 100;
        }
        if(newUnits == "cm" && this.units == "m"){
            this.width *= 10;
            this.height *= 10;
        }
        if(newUnits == "mm" && this.units == "m"){
            this.width *= 100;
            this.height *= 100;
        }
        this.units = newUnits;
    }
    get area(){
         return this.width * this.height;         
    }
    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
    }
}
    return {
        Figure,Circle,Rectangle
    }
}

function createComputerHierarchy(){
    class Component{
        manufacturer;
        constructor(manufacturer){
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Component{
        responseTime;
        constructor(manufacturer,responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }        
    }

    class Monitor extends Component{
        width;
        height;

        constructor(manufacturer,width,height){
            super(manufacturer);
            this.width= width;
            this.height = height;
        }
    }

    class Battery extends Component{
        expectedLife;

        constructor(manufacturer,expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Component{
        processorSpeed;
        ram;
        hardDiskSpace;

        constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
            super(manufacturer);

            if(this.constructor == Computer){
                throw Error();
            }  
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;          
        }
    }

    class Laptop extends Computer{
        weight;
        color;
        _battery;

        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery1){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery1;
        }

        get battery(){
            return this._battery;
        }

        set battery(val){
            if(!(val instanceof Battery)){
                throw TypeError();
            }
            this._battery = val;            
        }
    }
    
    class Desktop extends Computer{
        _keyboard;
        _monitor;

        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard1,monitor1){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.keyboard = keyboard1;
            this.monitor = monitor1;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(val){
            if(!(val instanceof Keyboard)){
                throw TypeError();
            }

            this._keyboard = val;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(val){
            if(!(val instanceof Monitor)){
                throw TypeError();
            }

            this._monitor = val;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
console.log(desktop.keyboard);


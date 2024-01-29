function cars(arr){
    let cars = {};

    for(let el of arr){
        let tokens = el.split(" ");
        let command = tokens.shift();

        if(command == "create"){
            let [name,a,parentName] = tokens;
            create(name,parentName); 

        }else if(command == "set"){
            let [name,key,value] = tokens;
            set(name,key,value);

        }else if(command == "print"){
            let [name] = tokens;
            print(name);
            
        }
    }

    function create(name,parentName){
        if(parentName){
            cars[name] = Object.create(cars[parentName]);
        }else{
            cars[name] = {};
        }
    }

    function set(name,key,value){
        cars[name][key] = value;
    }

    function print(name){
        for(let car in cars){
            if(car == name){
                let result = [];
                for(let key in cars[car]){
                    result.push(`${key}:${cars[car][key]}`);
                }       
                console.log(result.join(",")); 
            }
        }
    }
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)

cars(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);
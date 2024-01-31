function solution(){
    let recipeBook = {
        apple:{
            carbohydrate : 1,
            flavour : 2
        },
        lemonade:{
            carbohydrate : 10,
            flavour : 20
        },
        burger:{
            carbohydrate : 5,
            fat : 7,
            flavour : 3
        },
        eggs:{
            protein : 5,
            fat : 1,
            flavour : 1
        },
        turkey:{
            protein : 10,
            carbohydrate : 10,
            fat : 10,
            flavour : 10
        }
    }

    let microelements = {
        protein : 0,
        carbohydrate : 0,
        fat : 0,
        flavour : 0
    }
     

    function manager(command){
        let tokens = command.split(" ");
        let type = tokens.shift();
        if(type == "restock"){
            let [element,qtty] = tokens;
            microelements[element] += Number(qtty);
            
            return "Success";
        }else if(type == "prepare"){
            let [recipe,qtty] = tokens;
            qtty = Number(qtty);
            return maker(recipe,qtty);
        }else if(type == "report"){
            let result = [];
            for(let key in microelements){
                result.push(`${key}=${microelements[key]}`);
            }
            return result.join(" ");
        }
    }

    function maker(food,qtty){
        let enoughProtein = true;
        let enoughCarbogudrate = true;
        let enoughFat = true;
        let enoughFlavour = true;

        if(recipeBook[food].protein * qtty > microelements.protein){
            enoughProtein = false;
        }
        if(recipeBook[food].carbohydrate * qtty > microelements.carbohydrate){
            enoughCarbogudrate = false;
        }
        if(recipeBook[food].fat * qtty > microelements.fat){
            enoughFat = false;
        }
        if(recipeBook[food].flavour * qtty > microelements.flavour){
            enoughFlavour = false;
        }

        if(enoughProtein && enoughCarbogudrate && enoughFat && enoughFlavour){
            if("protein" in recipeBook[food]){
                microelements.protein -= recipeBook[food].protein * qtty;
            }
            if("carbohydrate" in recipeBook[food]){
                microelements.carbohydrate -= recipeBook[food].carbohydrate * qtty;
            }
            if("fat" in recipeBook[food]){
                microelements.fat -= recipeBook[food].fat * qtty;
            }
            if("flavour" in recipeBook[food]){
                microelements.flavour -= recipeBook[food].flavour * qtty;
            }
            return "Success";
        }else{
            if(!enoughProtein){
                return "Error: not enough protein in stock"
            }
            if(!enoughCarbogudrate){
                return 'Error: not enough carbohydrate in stock';
            }
            if(!enoughFat){
                return `Error: not enough fat in stock`;
            }
            if(!enoughFlavour){
                return `Error: not enough flavour in stock`;
            }
        }  
    }
    return manager;
}
let manager = solution (); 
console.log (manager ("prepare turkey 1")); // Success 
console.log (manager ("restock protein 10")); // Error: not enough carbohydrate in 
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));

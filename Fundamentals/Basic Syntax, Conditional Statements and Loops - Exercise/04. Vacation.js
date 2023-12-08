function solve(people,type,day){
    let price =0;
    if(day == "Friday"){
        switch(type){
            case "Students":
                price = 8.45 * people;
                if(people >= 30){
                    price *= 0.85;
                }
                break;
            case "Business":
                people = people >= 100 ? people - 10 :people;
                price = people * 10.9;
            break;
            case "Regular":
                price = people * 15;
                if(people >= 10 && people <= 20){
                    price *= 0.95;
                } 
            break;
        }
    }else if(day == "Saturday"){
        switch(type){
            case "Students":
                price = 9.8 * people;
                if(people >= 30){
                    price *= 0.85;
                }
                break;
            case "Business":
                people = people >= 100 ? people - 10 :people;
                price = people * 15.6;
            break;
            case "Regular":
                price = people * 20;
                if(people >= 10 && people <= 20){
                    price *= 0.95;
                } 
            break;
        }
    }else{
        switch(type){
            case "Students":
                price = 10.46 * people;
                if(people >= 30){
                    price *= 0.85;
                }
                break;
            case "Business":
                people = people >= 100 ? people - 10 :people;
                price = people * 16;
            break;
            case "Regular":
                price = people * 22.5;
                if(people >= 10 && people <= 20){
                    price *= 0.95;
                } 
            break;
        }
    }
    console.log("Total price:",price.toFixed(2));
}
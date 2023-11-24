function AdAstra([string]){
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<expire>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let matches = string.matchAll(pattern);
    
    let allCalories = 0;
    let foods = [];

    for(let el of matches){
        let {name,expire,calories} = el.groups;
        
        foods.push({name,expire,calories});
        allCalories += Number(calories);
    }

    let survivedDays = Math.floor(allCalories / 2000);
    if(survivedDays > 0){
        console.log(`You have food to last you for: ${survivedDays} days!`);
        for(let el of foods){
            console.log(`Item: ${el.name}, Best before: ${el.expire}, Nutrition: ${el.calories}`);
        }
    }else{
        console.log('You have food to last you for: 0 days!');
    }
}
AdAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
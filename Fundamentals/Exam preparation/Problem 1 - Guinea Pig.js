function solve(arr){
    let [food,hey,cover,weigth] = arr.map(Number);
    food *= 1000;
    hey *= 1000;
    cover *= 1000;
    weigth *= 1000;
    for(let i = 1;i <= 30;i++){
        food -= 300;
        if(i % 2 == 0){
            hey -= (0.05 * food).toFixed(2);
        }    
        if(i % 3 == 0){
            cover -= (1/3 * weigth).toFixed(2);
        }
    }
    if(food > 0 && hey > 0 && cover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hey / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }else{
        console.log("Merry must go to the pet store!");
    }
    
}
solve(["10",

"5",

"5.2",

"1"]);
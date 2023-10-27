function inventory(arr){
    let heroes = [];
    let levels = [];
    for(let el of arr){
        let tokens = el.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ");
        let hero = {name:name,level:level,items:items};
        levels.push(level);
        heroes.push(hero);
    }
    levels.sort((a,b) => a-b);
    let index = 0;

    while(index < levels.length ){
        for(let hero of heroes){
            if(hero.level == levels[index]){
                console.log(`Hero: ${hero.name}`);
                console.log(`level => ${hero.level}`);
                console.log(`items => ${hero.items.join(", ")}`);
                index++;
            }
        }
    }

}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])
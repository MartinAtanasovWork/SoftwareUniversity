function solve(arr){
    let games = arr[0].split(' ');
    for(let i =1;i < arr.length;i++){
        let tokens = arr[i].split(" ");
        let command = tokens[0];
        let game = tokens[1];
        if(command == "Install"){
            if(games.includes(game) == false){
                games.push(game);
            }
        }else if(command == "Uninstall"){
             if(game.includes(game)){
                let newGames = [];
                for(let i = 0;i< games.length;i++){
                    if(games[i] != game){
                        newGames.push(games[i])
                    }
                }
                games = newGames;
             }   
        }else if(command == "Update"){
            if(games.includes(game)){
                let newGames = [];
                for(let i = 0;i< games.length;i++){
                    if(games[i] != game){
                        newGames.push(games[i])
                    }
                }
                newGames.push(game);
                games = newGames;
            }
        }else if(command == "Expansion"){
            let expansionGames = game.split("-");
            let exppansionGame = expansionGames[0];
            let expansion = expansionGames[1];
            
            let newGames = [];
                for(let i = 0;i< games.length;i++){
                    newGames.push(games[i])
                    if(games[i] == exppansionGame){
                        newGames.push(`${exppansionGame}:${expansion}`)
                    }
                   
                }
                games = newGames;
        }
    }
    console.log(games.join(" "));
}
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

)
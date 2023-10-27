function movies(arr){
  let moovies = [];
  for(let command of arr){
    let tokens = command.split(" ");
    if(tokens[0] == "addMovie"){
        let name = [];
        for(let i = 1;i < tokens.length;i++){
            name.push(tokens[i]);
        }
        moovies.push({name:name.join(" ")});
    }else{
        if(tokens.includes("directedBy")){
            let nameArr = [];
            let directorArr = [];
            for(let i = 0;i < tokens.indexOf("directedBy");i++){
                nameArr.push(tokens[i]);
            }
            let name = nameArr.join(" ");
            for(let i = tokens.indexOf("directedBy") + 1;i < tokens.length;i++){
                directorArr.push(tokens[i]);
            }
            let director = directorArr.join(" ");

            for(let i=0;i < moovies.length;i++){
                 if(moovies[i].name == name){
                 moovies[i].director = director;
                }     
            }
        }else if(tokens.includes("onDate")){
            let nameArr = [];
            let dateArr = [];
            for(let i = 0;i < tokens.indexOf("onDate");i++){
                nameArr.push(tokens[i]);
            }
            let name = nameArr.join(" ");
            for(let i = tokens.indexOf("onDate") + 1;i < tokens.length;i++){
                dateArr.push(tokens[i]);
            }
            let date = dateArr.join(" ");
            
            for(let i=0;i < moovies.length;i++){
                    if(moovies[i].name == name){
                        moovies[i].date = date;
                 }
            }
        }   
    }
  }
  for(let el of moovies){
    if(el.name != undefined && el.director != undefined && el.date != undefined)
    console.log(JSON.stringify(el));
  }
  
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford  Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])
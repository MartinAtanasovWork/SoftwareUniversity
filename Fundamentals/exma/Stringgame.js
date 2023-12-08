function solve(arr){
    let string = arr.shift();

    for(let el of arr){
        if(el == "Done"){
            break;
        }

        let tokens = el.split(" ");
        let command = tokens.shift();

        if(command == "Change"){
            let [char,replacement] = tokens;

            let newString = string.split(char).join(replacement);
            string = newString;
            console.log(string);
        }else if(command == "Includes"){
            let [substring] = tokens;

            if(string.includes(substring)){
                console.log("True");
            }else{
                console.log("False");
            }
        }else if(command == "End"){
            let [substring] = tokens;

            if(string.endsWith(substring)){
                console.log("True");
            }else{
                console.log("False");
            }
        }else if(command == "Uppercase"){
            let newString = string.toUpperCase();

            string = newString;
            console.log(string);
        }else if(command == "FindIndex"){
            let [char] = tokens;

            console.log(string.indexOf(char));
        }else if(command == "Cut"){
            let [startIndex,count] = tokens.map(Number);

            let newString = string.substring(startIndex,startIndex + count);
            string = newString;
            console.log(string);
        }
    }
}
solve((["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"]))
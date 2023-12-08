function solve(arr){
    let n = Number(arr.shift())
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/g;
    for(let i=0;i < n;i++){
        let message = arr[i];
        let details = pattern.exec(message);
        if(details !== null){
           let {command,string} = details.groups;

           let print = [];

           for(let i=0;i < string.length;i++){
            print.push(string.charCodeAt(i));
           }

           console.log(`${command}: ${print.join(" ")}`);
        }else{
            console.log("The message is invalid");
        }
    }
}
solve((["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"]))
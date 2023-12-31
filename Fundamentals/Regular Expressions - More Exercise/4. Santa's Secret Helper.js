function solve(arr){
    let key = Number(arr.shift());
    let codes = [];
    arr.pop();
    for(let el of arr){
        let newCode = "";
        for(let i=0;i < el.length;i++){
            newCode += String.fromCharCode(el[i].charCodeAt() - key);
        }
        codes.push(newCode);
    }

    let pattern = /[^\@\-\!\:\>]*@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*!(?<behav>[NG])!/;
    let good = [];
    for(let el of codes){
        let match = pattern.exec(el);
        if(match !== null){
        if(match.groups.behav == "G"){
            good.push(match.groups.name);
        }
        }
    }
        console.log(good.join("\n"));
}
solve(['3',
'N}eideidmk$(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']

)
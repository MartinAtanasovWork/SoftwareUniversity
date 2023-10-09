function PrintASCIIRange(symbol1,symbol2){
    let s1 = symbol1.toString();
    let s2 = symbol2.toString();
    let result = [];
    if(s1.charCodeAt(0) > s2.charCodeAt(0)){
        for(let i = s2.charCodeAt(0) + 1;i < s1.charCodeAt(0);i++){
            result.push(String.fromCharCode(i));
        }
    }else{
        for(let i = s1.charCodeAt(0) + 1;i < s2.charCodeAt(0);i++){
            result.push(String.fromCharCode(i));
        }
    }
    if(symbol1.charCodeAt(0) != symbol2.charCodeAt(0)){
     console.log(result.join(" "));   
    }
}
PrintASCIIRange('C',
'#'
)
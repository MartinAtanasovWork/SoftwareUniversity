function solve(a){
    for(let i=0;i < a;i += 1){
        let result = [];
        for(let j=0;j < a;j++){
         result.push("*");
        }
        console.log(result.join(" "));
    }
}solve(4)
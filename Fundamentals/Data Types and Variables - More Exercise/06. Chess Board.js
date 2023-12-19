function solve(n){
    let color = "black"
    let staritngColor = "black";
    console.log('<div class="chessboard">');
    for(let i=0;i < n;i++){
        console.log("  <div>");
        for(let i=0;i < n;i++){
            console.log(`    <span class="${color}"></span>`);
            
            if(color == "black"){
                color = "white"
            }else{
                color = "black";
            }
        }
        if(i % 2==0){
            color = "white"
        }else{
            color = "black"
        }
        console.log('  </div>');
    }
    console.log("</div>");
}
solve(6)
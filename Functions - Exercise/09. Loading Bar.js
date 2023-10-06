function loadingBar(percentage){
    let result = "";
    if(percentage == 100){
        console.log("100% Complete!");
    }else{
        result += `${percentage}% [`
        for(let i = 0; i < percentage / 10;i++){
            result +="%";
        }
        for(let i = 0; i < 10 - percentage / 10;i++){
            result +=".";
        }
        result += "]";
        console.log(result);
        console.log("Still loading...");
    }
}
loadingBar(50)
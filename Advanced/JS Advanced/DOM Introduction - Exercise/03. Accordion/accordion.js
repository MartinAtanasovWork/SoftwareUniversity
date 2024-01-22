function toggle() {
    let span = document.querySelector("span.button");
    if(span.textContent == "More"){
        span.textContent = "Less";
        document.getElementById("extra").style.display = "block";
    }else{
        span.textContent = "More";
        document.getElementById("extra").style.display = "none";
    }
}
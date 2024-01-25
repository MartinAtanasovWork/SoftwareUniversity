function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let resultDiv = document.getElementById("result");
    gradient.addEventListener("mousemove",mouseMove);
    gradient.addEventListener("mouseout",mouseOut)
    
    function mouseMove(event){
        let gradientWidth = event.target.clientWidth;
        let positionOfMouse = event.offsetX / (gradientWidth - 1);
        let percentage = Math.trunc(positionOfMouse * 100);
        resultDiv.textContent = percentage + "%"; 
    }   
    function mouseOut(){
            resultDiv.textContent = "";
    }
}
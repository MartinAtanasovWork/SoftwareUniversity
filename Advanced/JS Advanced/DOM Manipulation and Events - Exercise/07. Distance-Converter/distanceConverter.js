function attachEventsListeners() {
    let btn = document.getElementById("convert");
    btn.addEventListener("click",convertClicked);

    function convertClicked(){
        let num = Number(document.getElementById("inputDistance").value);
        let [from,to] = Array.from(document.querySelectorAll("select"));

        let result = document.getElementById('outputDistance');
        result.value = convert(num,from.value,to.value);
    }
    
    function convert(number,unitFrom,unitTo){
        let meters = 0;
        switch(unitFrom){
            case "km": 
            meters = number * 1000;
            break;
            case "m":
            meters = number * 1;
            break;
            case "cm":
            meters = number * 0.01;
            break;
            case "mm":
            meters = number * 0.001;
            break;
            case "mi":
            meters = number * 1609.34;
            break;
            case "yrd":
             meters = number * 0.9144;
            break;
            case "ft":
            meters = number * 0.3048;
            break;
            case "in":
            meters = number * 0.0254;
            break;
        }
        switch(unitTo){
            case "km": 
            meters = meters / 1000;
            break;
            case "m":
            meters = meters / 1;
            break;
            case "cm":
            meters = meters / 0.01;
            break;
            case "mm":
            meters = meters / 0.001;
            break;
            case "mi":
            meters = meters / 1609.34;
            break;
            case "yrd":
             meters = meters / 0.9144;
            break;
            case "ft":
            meters = meters / 0.3048;
            break;
            case "in":
            meters = meters / 0.0254;
            break;
        }
        return meters;
    }
}
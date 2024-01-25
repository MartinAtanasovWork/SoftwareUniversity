function attachEventsListeners() {
    let inputs = Array.from(document.querySelectorAll('[type="button"]'));
    for(let input of inputs){
        input.addEventListener("click",clicked);
    }

    function clicked(event){
        let div = event.target.parentElement;
        let children = Array.from(div.children);

        if(children[1].id == "days"){
            let days = Number(children[1].value);
            let hours = days * 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;

            output(days,hours,minutes,seconds);
        }else if(children[1].id == "hours"){
            let hours = Number(children[1].value);
            let days = hours/24;
            let minutes = hours * 60;
            let seconds = minutes * 60;

            output(days,hours,minutes,seconds);  
        }else if(children[1].id == "minutes"){
            let minutes = Number(children[1].value);
            let hours = minutes / 60;
            let days = hours/24;
            let seconds = minutes * 60;

            output(days,hours,minutes,seconds);  
        }else if(children[1].id == "seconds"){
            let seconds = Number(children[1].value);
            let minutes = seconds/60;
            let hours = minutes/60;
            let days = hours/24;

            output(days,hours,minutes,seconds);  
        }
    }
    function output(days,hours,minutes,seconds){
        let inputDays = document.getElementById("days");
        let inputHours = document.getElementById("hours");
        let inputMinutes = document.getElementById("minutes");
        let inputSeconds = document.getElementById("seconds");
        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }
}
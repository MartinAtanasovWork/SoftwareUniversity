function attachEvents() {
    let getWetherBtn = document.getElementById("submit");

    getWetherBtn.addEventListener("click",getWeather);
    let locationDiv;
    function getWeather(){
        locationDiv = document.getElementById("forecast");
        getStartData();
        locationDiv.style.display = "inline";       
    }

    async function createWeatherProgramme(id){
        let todayData = await getTodayData(id);
        let upcommingData = await getUpcommingData(id);
        let todayDiv = document.getElementById('current');
        let upcommingDiv= document.getElementById("upcoming");

        todayDiv.appendChild(createTodayElements(todayData.name,todayData.forecast));
        upcommingDiv.appendChild(createUpcommingElements(upcommingData.forecast));
    }

    async function getTodayData(id){
        let url = `http://localhost:3030/jsonstore/forecaster/today/${id}`;
        
        try {
            let headers = await fetch(url);
            let data = await headers.json();
            
            if(!headers.ok){
                throw Error();
            }
            return data;  
        } catch (error) {
            locationDiv.textContent = "Error";    
        }  
    }

    async function getUpcommingData(id){
        let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${id}`;
        
        try {
            let headers = await fetch(url);
            let data = await headers.json();
            
            if(!headers.ok){
                throw Error();
            }
            return data;  
        } catch (error) {
            locationDiv.textContent = "Error";    
        }  
    }

    async function getStartData(){
        let url = "http://localhost:3030/jsonstore/forecaster/locations";
        let locationId = document.getElementById("location").value;
        try {
            let headers = await fetch(url);
                        
            if(!headers.ok){
                throw Error();
            }
            if(locationId == "ny"  || locationId == "london"  || locationId == "barcelona"){
                createWeatherProgramme(locationId);
            }else{
                throw Error();
            }
            
        } catch (error) {
            locationDiv.textContent = "Error";    
        }        
    }

    function createTodayElements(name,forecast){
        let div = document.createElement("div");
        div.classList.add("forecasts");
        let spanSymbol = document.createElement("span");
        spanSymbol.classList.add("condition");
        spanSymbol.classList.add("symbol")
        switch(forecast.condition){
            case "Sunny":
            spanSymbol.innerHTML = "&#x2600;";
            break;
            case "Partly sunny":
            spanSymbol.innerHTML = "&#x26C5;";
            break;
            case "Overcast":
            spanSymbol.innerHTML = "&#x2601;";
            break;
            case "Rain":
            spanSymbol.innerHTML = "&#x2614;";
            break;                                      
        }
        let spanInfo = document.createElement("span");
        spanInfo.classList.add("condition");
        let spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = name;
        let spanDeg = document.createElement("span");
        spanDeg.classList.add("forecast-data");
        spanDeg.innerHTML = `${forecast.low}&#176;/${forecast.high}&#176;`;
        let spanCond = document.createElement("span");
        spanCond.classList.add("forecast-data");
        spanCond.textContent = forecast.condition;

        spanInfo.appendChild(spanName);
        spanInfo.appendChild(spanDeg);
        spanInfo.appendChild(spanCond);

        div.appendChild(spanSymbol);
        div.appendChild(spanInfo);

        return div;
    }

    function createUpcommingElements(days){
        let span1 = createUpSpan(days[0].low,days[0].high,days[0].condition);
        let span2 = createUpSpan(days[1].low,days[1].high,days[1].condition);
        let span3 = createUpSpan(days[2].low,days[2].high,days[2].condition);

        let div = document.createElement("div");
        div.classList.add("forecast-info");

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);

        return div;
    }

    function createUpSpan(low,high,cond){
        let mainSpan = document.createElement("span");
        mainSpan.classList.add("upcoming");

        let spanSymbol = document.createElement("span");
        spanSymbol.classList.add("symbol")
        switch(cond){
            case "Sunny":
            spanSymbol.innerHTML = "&#x2600;";
            break;
            case "Partly sunny":
            spanSymbol.innerHTML = "&#x26C5;";
            break;
            case "Overcast":
            spanSymbol.innerHTML = "&#x2601;";
            break;
            case "Rain":
            spanSymbol.innerHTML = "&#x2614;";
            break;                                      
        }
        let spanDeg = document.createElement("span");
        spanDeg.classList.add("forecast-data");
        spanDeg.innerHTML = `${low}&#176;/${high}&#176;`;
        let spanCond = document.createElement("span");
        spanCond.classList.add("forecast-data");
        spanCond.innerHTML = `${cond}`;

        mainSpan.appendChild(spanSymbol);
        mainSpan.appendChild(spanDeg);
        mainSpan.appendChild(spanCond);

        return mainSpan;
    }
}

attachEvents();
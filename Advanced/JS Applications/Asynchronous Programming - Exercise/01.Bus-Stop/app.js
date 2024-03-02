function getInfo() {
  
        console.log("a");
        let inputId = document.getElementById("stopId").value;
        let url = `http://localhost:3030/jsonstore/bus/businfo/${inputId}`;
            
        fetch(url).then(onHeaders).then(onData).catch(onError);
    
        function onHeaders(response){
            if(!response.ok){
                throw "Error";
            }
            
            return response.json();
        }
    
        function onData(data){
            displayData(data);
        }
    
        function onError(){
            let nameDiv = document.getElementById("stopName");
            nameDiv.textContent = "Error";
        }   

        function displayData(data){
            let nameDiv = document.getElementById("stopName");
            let busesUl = document.getElementById("buses");
            
            nameDiv.textContent = data.name;
            busesUl.replaceChildren(...Object.entries(data.buses).map(createLi));

        }

        function createLi([num,mins]){
            let li = document.createElement("li");
            li.textContent = `Bus ${num} arrives in ${mins} minutes`;

            return li;
        }
    
   
}
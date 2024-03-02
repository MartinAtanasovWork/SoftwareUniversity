function solve() {
    let departBtn = document.getElementById("depart");
    let arriveBtn = document.getElementById("arrive");
    let nameDiv = document.getElementsByClassName("info")[0];
    let url = `http://localhost:3030/jsonstore/bus/schedule/depot`;

    async function depart() {
       let data = await loadData();

       nameDiv.textContent = `Next stop ${data.name}`;

       departBtn.setAttribute("disabled","true");
       arriveBtn.removeAttribute("disabled");
    }

    async function arrive() {
        let data = await loadData();
        console.log(data.next);
        url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`;
        nameDiv.textContent = `Arriving at ${data.name}`; 

        arriveBtn.setAttribute("disabled","true");
        departBtn.removeAttribute("disabled");
    }

    async function loadData(){
        try{            
            let response = await fetch(url);
            let data = await response.json();
            
            if(!response.ok){
                throw new Error();
            }
            return data;
        }catch (e){
            departBtn.setAttribute("disabled","true");
            arriveBtn.setAttribute("disabled","true");
            nameDiv.textContent = "Error";
        }        
    }    
    
    return {
        depart,
        arrive
    };
}

let result = solve();
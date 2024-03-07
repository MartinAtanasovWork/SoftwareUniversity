function attachEvents() {
    let loadBtn = document.getElementById("btnLoad");

    loadBtn.addEventListener("click",loadPhonebook);

    let createBtn = document.getElementById("btnCreate");

    createBtn.addEventListener("click",addPhone);
}

async function addPhone(){
    let url = "http://localhost:3030/jsonstore/phonebook";
    let person = document.getElementById('person').value.trim();
    let phone = document.getElementById("phone").value.trim();
    if(!person || !phone){
        return;
    }
    try {
         let req = await fetch(url,{
            method: "post",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({person,phone})
         })
         
         if(!req.ok){
            throw new Error();
         }
    } catch (error) {
        alert(error);
    }
    loadPhonebook();    
    document.getElementById('person').value = "";
    document.getElementById("phone").value = "";
}

async function loadPhonebook(){
    let url = "http://localhost:3030/jsonstore/phonebook";

    try {
        let headers = await fetch(url);
        let data = await headers.json();
        displayPhonebook(data);
        if(!headers.ok){
            throw new Error("Error");
        }
    } catch (error) {
        alert(error.message);
    }
}

function displayPhonebook(data){
    let ul = document.getElementById("phonebook");
    ul.textContent = "";    
    for(let [key,value] of Object.entries(data)){
        let li = document.createElement("li");
        li.textContent = `${value.person}:${value.phone}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click",async function (ev){
            let url = `http://localhost:3030/jsonstore/phonebook/${key}`;

            try {
            let req = await fetch(url,{
                method: "delete"
            })
            if(!req.ok){
                throw new Error("Not deleted")
            }
            } catch (error) {
                alert(error.message);
            }
            
        });
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }
  
}

attachEvents();
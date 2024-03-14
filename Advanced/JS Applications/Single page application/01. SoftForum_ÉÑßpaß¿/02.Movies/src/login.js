import { request } from "./request.js"; 
import { hideAllButOne } from "./showsections.js";
let sectionId = "form-login";
let form = document.querySelector(`#${sectionId} form`);

function startLogin(){
    hideAllButOne(sectionId);
    
    let submitBtn = form.querySelector("button");

    submitBtn.addEventListener("click",submit);
}

function verifyData(){
    let email = form.querySelector("#email").value.trim();
    let password = form.querySelector("#password").value.trim();

    if(email == ""){
        alert("Fill the email field.");
    }else{
        if(password == ""){
            alert("Fil the password field.");
        }else{
            form.querySelector("#email").value = "";
            form.querySelector("#password").value = "";
            return {email,password};
        }
    }
   
}

async function submit(event){
    let data = verifyData();   
    console.log(data);
    try {
        let endpoint = "/users/login";
        let options = {
            "method":"post",
            "headers":{"Content-type":"application/json"},
            "body": JSON.stringify(data)
        }
        let req = await request(endpoint,options);
        console.log(req);    
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(req));

        window.location = "index.html";
    } catch (error) {
        alert("Invalid email or password.");   
    }
}

export{
    startLogin
}
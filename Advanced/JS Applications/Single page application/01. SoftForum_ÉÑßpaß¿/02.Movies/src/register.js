import { request } from "./request.js"; 
import { hideAllButOne } from "./showsections.js";
let sectionId = "form-sign-up";

function startRegister(){
    hideAllButOne(sectionId);
    let form = document.querySelector(`#${sectionId} form`);
    let submitBtn = form.querySelector("button");

    submitBtn.addEventListener("click",submit);   
}

function verifyData(){
    let form = document.querySelector(`#${sectionId} form`);

    let email = form.querySelector("#email").value.trim();
    let password =  form.querySelector("#password").value.trim();
    let repassword = form.querySelector("#repeatPassword").value.trim();

    if(email != "" && password != "" && repassword != ""){
        if(password.length >= 6){
            if(password == repassword){
                form.querySelector("#email").value = "";
                form.querySelector("#password").value = "";
                form.querySelector("#repeatPassword").value = "";
                return {email,password};
            }else{
                alert("Both passwords must match.");
            }
        }else{
            alert("The password length must be at least 6 characters");
        }
    }else{
        alert("All fields must be filled before registering.");
    }    
}

async function submit(event){
    event.preventDefault();

    let data = verifyData();

    if(typeof data == "object"){
        let endpoint = "/users/register";
        let options = {
            "method":"post",
            "headers":{"Content-Type": "application/json"},
            "body": JSON.stringify(data)
        }
    
        let req = await request(endpoint,options);

        window.localStorage.setItem("user",JSON.stringify(req));      
        
        window.location = "index.html";
    }
   
}

export{
    startRegister
}
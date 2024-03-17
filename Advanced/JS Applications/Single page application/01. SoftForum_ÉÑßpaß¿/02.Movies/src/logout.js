import { request } from "./request.js";

export function logout(){
    start();    
}

async function start(){
    let userdata =JSON.parse(localStorage.getItem("user"));

    let options = {
        "method":"get",
        "headers":{"X-Authorization": userdata.accessToken},                     
    }
    await request("/users/logout",options);
        
    localStorage.clear();

    window.location = "index.html";
}
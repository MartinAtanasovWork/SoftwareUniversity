import { addMovie } from "./addMovie.js";
import { hideAllButOne } from "./showsections.js";
import { startRegister } from "./register.js";
import { startLogin } from "./login.js";
import { logout } from "./logout.js";
import { showHome } from "./home.js";
start();

function start(){
    hideAllButOne("home-page");
    showHome();   

    let addMovieSection = document.getElementById("add-movie-button");
    let addMovieBtn = addMovieSection.querySelector("a");
    addMovieBtn.addEventListener("click",addMovie);

    let mooviesA = document.getElementsByClassName("navbar-brand text-light")[0];
    mooviesA.href = "index.html";

    let nav = document.querySelector("nav");

    
    let homeAnchors = Array.from(nav.querySelectorAll("a"));
    let welcomeMessage = homeAnchors[1];
    let logoutBtn= homeAnchors[2];
    let loginBtn = homeAnchors[3];
    let registerBtn = homeAnchors[4];
   

    loginBtn.addEventListener("click",startLogin);
    registerBtn.addEventListener("click",startRegister);
    logoutBtn.addEventListener("click",logout)
    
    if(localStorage.getItem("user")){
        welcomeMessage.style.display = "block";
        addMovieSection.style.display = "block";
        let user = JSON.parse(localStorage.getItem("user"));
        welcomeMessage.textContent = `Welcome, ${user.email}`;
        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";        
    }else{
        welcomeMessage.style.display = "none"; 
        addMovieSection.style.display = "none";       
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        registerBtn.style.display = "block";
    }     
}

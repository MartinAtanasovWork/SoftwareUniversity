import { request } from "./request.js";
import { hideAllButOne } from "./showsections.js";

let sectionId = "add-movie";
let form = document.querySelector(`#${sectionId}`);
export function addMovie(event){
    event.preventDefault();

    hideAllButOne(sectionId);

    let btn = form.querySelector("button");

    btn.addEventListener("click",sendMovieRequest) 
}

function getData(){
    let titleInput = form.querySelector("#title");
    let descriptionInput = form.querySelector(`textarea`);
    let imgUrlInput = form.querySelector("#imageUrl");

    let title = titleInput.value;
    let description = descriptionInput.value;
    let img = imgUrlInput.value;

    if(title != "" && description != "" && img != ""){
        titleInput.value = "";
        descriptionInput.value = "";
        imgUrlInput.value = "";
        return {title,description,img};
    }else{
        alert("Fill all the fields.")
    }
}

async function sendMovieRequest(event){
    event.preventDefault();

    let movieData = getData();
    if(movieData){
        let user = JSON.parse(localStorage.getItem("user"));
        
        let options = {
            "method":"post",
            "headers": {"Content-Type":"application/json", "X-Authorization": user.accessToken},
            "body":JSON.stringify(movieData)
        }
        console.log(user.accessToken);
        let req = await request("/data/movies",options);
                
        console.log(req);
    }    
}


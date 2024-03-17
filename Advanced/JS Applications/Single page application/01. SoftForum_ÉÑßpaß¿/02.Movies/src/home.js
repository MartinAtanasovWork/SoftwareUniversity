import { request } from "./request.js";

export function showHome(){
    displayMovies();      
}

async function displayMovies(){
    let ul = document.getElementById("movies-list");
   
    let movies = await getMovies();
    ul.replaceChildren();
    for(let movie of movies){        
        ul.appendChild(makeLi(movie));
    }  
}

function makeLi({title,img,_id}){
    // Creating elements
    let li = document.createElement("li");
    let imgElm = document.createElement("img");
    let divTitle = document.createElement("div");
    let divBtn = document.createElement("div");
    let divTitleh4 = document.createElement("h4");
    let divTitleA = document.createElement("a");
    let divBtnBtn = document.createElement("button");

    // Adding classes
    li.classList.add("card");
    li.classList.add("mb-4");
    imgElm.classList.add("card-img-top");
    divTitle.classList.add("card-body");
    divTitleh4.classList.add("card-title");
    divBtn.classList.add("card-footer");
    divBtnBtn.classList.add("btn");
    divBtnBtn.classList.add("btn-info");

    // Adding text and attributes
    imgElm.src = img;
    imgElm.width = "400";
    divTitleh4.textContent = title;
    divBtnBtn.textContent = "Details";

    // Adding event listeners
    
    // Appending elements
    divTitle.appendChild(divTitleh4);
    divTitle.appendChild(divTitleA);
    divBtn.appendChild(divBtnBtn);
    li.appendChild(imgElm);
    li.appendChild(divTitle);
    li.appendChild(divBtn);

    return li;
}

async function getMovies(){    
    let req = await request("/data/movies ");
    console.log(req);
    return req;
}

/*
<li class="card mb-4">
    <img class="card-img-top"  src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Card image cap" width="400"/>
      <div class="card-body">
        <h4 class="card-title">Movie Title</h4>
        <a href="#">
        </a>
      </div>
      <div class="card-footer">
      <button type="button" class="btn btn-info">Details</button>
      </div>
</li>
*/
import { request } from "./request.js";
import { startTheme } from "./theme-content.js";
start();    

function start(){
    let homeBtn = document.querySelector("header a");
    homeBtn.href = "index.html";

    let titleInput = document.getElementById("topicName");
    let usernameInput = document.getElementById("username")
    let postInput = document.getElementById("postText");
    let postBtn = document.getElementsByClassName("public")[0];
    let deleteBtn = document.getElementsByClassName("cancel")[0];

    document.querySelector("form").addEventListener("submit",event => event.preventDefault());

    deleteBtn.addEventListener("click",clearInputs);
    postBtn.addEventListener("click",makeNewPost);

    function clearInputs(){         
        titleInput.value = "";
        usernameInput.value = "";
        postInput.value = "";
    }

    function makeNewPost(){
        let title = titleInput.value;
        let username =  usernameInput.value;
        let post = postInput.value;
        let date = new Date();
        if(title != "" && username != "" && post != ""){
            let postData = {
                title,
                username,
                post,
                date             
            }
    
            let url = "http://localhost:3030/jsonstore/collections/myboard/posts";
            let options = {
                "method":"post",
                "headers":{"Content-Type": "application/json"},
                "body": JSON.stringify(postData)
            }
    
            request(url,options);
            clearInputs();
            loadTopics();
        }       
    }
    loadTopics();
}

async function loadTopics(){
    let url = "http://localhost:3030/jsonstore/collections/myboard/posts";
    let topics = await request(url);
    document.getElementsByClassName("topic-container")[0].textContent = ""
    for(let id in topics){
        createNewTopicElms(topics[id],id);
    }
}
function createNewTopicElms(topic,id){
    let container = document.getElementsByClassName("topic-container")[0];

    let title = topic.title;
    let user = topic.username;
    let date = topic.date;

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("topic-name-wrapper");
    let topicname = document.createElement("div");
    topicname.classList.add("topic-name");
    let a = document.createElement("a");
    a.classList.add("normal");
    let divcol = document.createElement("div");
    divcol.classList.add("columns");
    let divholder = document.createElement("div");
    let pdate = document.createElement("p");
    let divuser = document.createElement("div");
    divuser.classList.add("nick-name");
  
    a.innerHTML = `<h2>${title}</h2>`;    
    a.addEventListener("click",(event) => {
        startTheme(event,id);         
    });
 
    pdate.innerHTML = `Date: <time>${date}</time>`;

    divuser.innerHTML = `<p>Username: <span>${user}</span></p>`;

    divholder.appendChild(pdate);
    divholder.appendChild(divuser);
    divcol.appendChild(divholder);
    topicname.appendChild(a);
    topicname.appendChild(divcol);
    mainDiv.appendChild(topicname);
    
    container.appendChild(mainDiv);
}

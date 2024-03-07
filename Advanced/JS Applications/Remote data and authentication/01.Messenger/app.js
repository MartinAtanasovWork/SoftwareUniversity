function attachEvents() {
    let sendBtn = document.getElementById("submit");

    sendBtn.addEventListener("click",sentMassage);

    let refreshBtn = document.getElementById("refresh")

    refreshBtn.addEventListener("click",refreshChat); 
}

async function sentMassage(){
    let url = "http://localhost:3030/jsonstore/messenger";

    let {author,content} = getContent();

    console.log(author,content);

    try {
        let req = await fetch(url,{
            method:"post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({author,content})      
        })

        if(!req.ok){
            throw new Error("error")
        }
    } catch (error) {
        alert(error.message);   
    }
}

function getContent(){
    let author = document.querySelector('input[name="author"]').value;
    let content = document.querySelector('input[name="content').value;
    document.querySelector('input[name="author"]').value = "";
    document.querySelector('input[name="content"]').value = "";
    return {author,content};
}    

async function refreshChat(){
    let url = " http://localhost:3030/jsonstore/messenger";

    try {
        let headers = await fetch(url);
        let data = await headers.json();
        displayData(data);
        if(!headers.ok){
            throw new Error();
        }
    } catch (error) {
        alert(error.message);
    }
}    

function displayData(data){
    let textArea = document.getElementById("messages");
    let result = "";
    for(let [key,value] of Object.entries(data)){
        result += `${value.author}: ${value.content}` + "\n";
    }
    textArea.textContent = result.trim();
    document.querySelector('input[name="author"]').value = "";
    document.querySelector('input[name="content"]').value = "";
}

attachEvents();
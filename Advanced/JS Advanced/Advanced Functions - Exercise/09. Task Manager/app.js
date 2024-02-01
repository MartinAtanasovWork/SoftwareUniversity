function solve() {
    let form = document.querySelector("form");
    form.addEventListener("submit",prevent)

    let taskElement = document.getElementById("task");
    let descriptionElement = document.getElementById("description");
    let dateElement = document.getElementById("date");
    let addBtn = document.getElementById("add");

    let openSection = document.querySelectorAll("section")[1].children[1];
    let inprgsSection = document.querySelectorAll("section")[2].children[1];
    let compeltedSection = document.querySelectorAll("section")[3].children[1];

    addBtn.addEventListener("click",createTask);

    function prevent(event){
        event.preventDefault();
    }

    function createTask(){      
        let article = createArticle(taskElement.value,descriptionElement.value,dateElement.value)
        if(article){
            openSection.appendChild(article); 
        }
      
    }

    function createArticle(task,description,date){
        if(task != "" && description != "" && date != ""){
        let article = document.createElement("article");
        let header = document.createElement("h3");
        let descElement = document.createElement("p");
        let dateElement = document.createElement("p");
        let btnsDiv = document.createElement("div");
        btnsDiv.classList.add("flex");
        let btnStart = document.createElement("button");
        let btnDelete = document.createElement("button");
        btnStart.classList.add("green");
        btnDelete.classList.add("red");

        header.textContent = task;
        descElement.textContent = `Description: ${description}`;
        dateElement.textContent = `Due Date: ${date}`;

        btnStart.textContent = "Start";
        btnDelete.textContent = "Delete";

        btnStart.addEventListener("click",moveToProgress);
        btnDelete.addEventListener("click",deleteArticle);

        btnsDiv.appendChild(btnStart);
        btnsDiv.appendChild(btnDelete);
        
        article.appendChild(header);
        article.appendChild(descElement);
        article.appendChild(dateElement);
        article.appendChild(btnsDiv);
        
        return article;
        }
    }

    function moveToProgress(event){
        let div = event.target.parentElement;
        let article = div.parentElement;
        let btnStart = div.querySelectorAll("button")[0];
        let deleteBtn = div.querySelectorAll("button")[1];

        btnStart.textContent = "Finish";    
        btnStart.classList.remove("green");
        btnStart.classList.add("orange");
        btnStart.removeEventListener("click",moveToProgress);
        btnStart.addEventListener("click",moveToCompleted);

        div.remove()

        let newDiv = document.createElement("div");
        newDiv.classList.add("flex");
        newDiv.appendChild(deleteBtn);
        newDiv.appendChild(btnStart);

        article.appendChild(newDiv);
        inprgsSection.appendChild(article);
    }

    function deleteArticle(event){
        let div = event.target.parentElement;
        let article = div.parentElement;
        article.remove();
    }

    function moveToCompleted(event){
        let div = event.target.parentElement;
        let article = div.parentElement;
        let btnsDiv = article.querySelector("div");

        btnsDiv.remove()

        compeltedSection.appendChild(article);
    }
}
window.addEventListener("load", solve);

function solve() {
  let form = document.querySelector("form");
  form.addEventListener("submit",prevent);
  
  function prevent(event){
    event.preventDefault();
  }
    
  let addButton = document.getElementsByClassName("add-btn")[0];
  addButton.addEventListener("click",createPreview);
    
  function createPreview(){
    let snowmanName = document.getElementById("snowman-name").value;
    let height = document.getElementById("snowman-height").value;
    let location = document.getElementById("location").value;
    let creatorName = document.getElementById("creator-name").value;
    let specialAttribute = document.getElementById("special-attribute").value;
    
  
    if(snowmanName != "" && height != "" && location != "" && creatorName != "" &&  specialAttribute != ""){
      let ul = document.querySelector(".snowman-preview");
      let li = createPreviewLi();

      ul.appendChild(li);

      document.getElementById("snowman-name").value = "";
      document.getElementById("snowman-height").value = "";
      document.getElementById("location").value = "";
      document.getElementById("creator-name").value = "";
      document.getElementById("special-attribute").value = "";     

      addButton.setAttribute("disabled",true);

      function createPreviewLi(){
        let li = document.createElement("li");
        li.classList.add("snowman-info");

        let article = document.createElement("article");
        let nameP = document.createElement("p");
        let heightP = document.createElement("p");
        let locationP = document.createElement("p");
        let creatorP = document.createElement("p");
        let attributeP = document.createElement("p");

        nameP.textContent = `Name: ${snowmanName}`;
        heightP.textContent = `Height: ${height}`;
        locationP.textContent = `Location: ${location}`;
        creatorP.textContent = `Creator: ${creatorName}`;
        attributeP.textContent = `Attribute: ${specialAttribute}`;
          
        article.appendChild(nameP);
        article.appendChild(heightP);
        article.appendChild(locationP);
        article.appendChild(creatorP);
        article.appendChild(attributeP);

        let btnDiv = document.createElement("div");
        btnDiv.classList.add("btn-container");
          
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        let nextBtn = document.createElement("button");
        nextBtn.classList.add("next-btn");
        nextBtn.textContent = "Next";

        editBtn.addEventListener("click",edit);
        nextBtn.addEventListener("click",next);

        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(nextBtn);

        li.appendChild(article);
        li.appendChild(btnDiv);
        
        function edit(event){
          event.target.parentElement.parentElement.remove();

          document.getElementById("snowman-name").value = snowmanName;
          document.getElementById("snowman-height").value = height;
          document.getElementById("location").value = location;
          document.getElementById("creator-name").value = creatorName;
          document.getElementById("special-attribute").value = specialAttribute;
          
          addButton.removeAttribute("disabled");
        }  

        function next(event){
          event.target.parentElement.parentElement.remove();

          let ul = document.querySelector(".snow-list");

          let li = document.createElement("li");
          li.classList.add("snowman-content");

          let article = document.createElement("article");
          
          let nameP = document.createElement("p");
          let heightP = document.createElement("p");
          let locationP = document.createElement("p");
          let creatorP = document.createElement("p");
          let attributeP = document.createElement("p");
          let sendBtn = document.createElement("button");

          nameP.textContent = `Name: ${snowmanName}`;
          heightP.textContent = `Height: ${height}`;
          locationP.textContent = `Location: ${location}`;
          creatorP.textContent = `Creator: ${creatorName}`;
          attributeP.textContent = `Attribute: ${specialAttribute}`;
          sendBtn.textContent = "Send";

          sendBtn.classList.add("send-btn");
          sendBtn.addEventListener("click",send);
          
          function send(){
            let main = document.querySelector("main");
            main.remove();

            let img = document.getElementById("back-img");
            img.removeAttribute("hidden");

            let button = document.createElement("button");
            button.classList.add("back-btn");
            button.textContent = "Back";

            button.addEventListener("click",reload);

            function reload(){
              document.location.reload();
            }

            document.body.appendChild(button);
          }  

          article.appendChild(nameP);
          article.appendChild(heightP);
          article.appendChild(locationP);
          article.appendChild(creatorP);
          article.appendChild(attributeP);
          article.appendChild(sendBtn);

          li.appendChild(article);

          ul.appendChild(li);
        }

        return li;
      }
    }
  }
}

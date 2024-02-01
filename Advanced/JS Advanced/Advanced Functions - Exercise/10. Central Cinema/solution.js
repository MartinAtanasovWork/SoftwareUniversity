function solve() {
    let form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit",prevent);

    function prevent(event){
       event.preventDefault();
    }

    let inputs = Array.from(form.querySelectorAll("input"));
   let nameElement = inputs[0];
    let hallElement = inputs[1];
    let priceElement = inputs[2];

    let addBtn = form.querySelector("button");

    addBtn.addEventListener("click",addMovie)

   let moviesUl = document.querySelector("section#movies ul");
   let archiveUl = document.querySelector("section#archive ul");
   
   let clearButton = document.querySelector("section#archive button");

   clearButton.addEventListener("click",clearArchive);

   function addMovie(){
   let name = nameElement.value;
   let hall = hallElement.value;
   let price = Number(priceElement.value);
   let isNumber = /\d+/.test(priceElement.value);
   console.log(priceElement.value);
   if(name != "" && hall != ""  && isNumber){
       let li = createMovie(name,hall,price);

       moviesUl.appendChild(li);
       nameElement.value = "";
       hallElement.value = "";
       priceElement.value = "";
   }
  }

  function createMovie(name,hall,price){
       let li = document.createElement("li");
       let span = document.createElement("span");
       span.textContent = name;

       let hallElement = document.createElement("strong");
       hallElement.textContent = `Hall: ${hall}`;

       let priceDiv = document.createElement("div");

       let priceElement = document.createElement("strong");
       priceElement.textContent = price.toFixed(2);
       let priceInput = document.createElement("input");
       priceInput.placeholder = "Tickets Sold";
       let priceButton = document.createElement('button');
       priceButton.textContent = "Archive";

       priceButton.addEventListener("click",archive);

       priceDiv.appendChild(priceElement);
       priceDiv.appendChild(priceInput);
       priceDiv.appendChild(priceButton);

       li.appendChild(span);
       li.appendChild(hallElement);
       li.appendChild(priceDiv);

       return li;
  }

  function archive(event){
       let div = event.target.parentElement;
       let parentLi = div.parentElement;

       let archiveName = parentLi.querySelector("span").textContent;
       let price = Number(parentLi.querySelector("div strong").textContent);
       let countElement = parentLi.querySelector("div input");
       let isNumber = /\d+/.test(countElement.value);    

       if(isNumber){
           let count = Number(countElement.value);

           let archiveLi = document.createElement("li");
           let archiveSpan = document.createElement("span");
           let archiveStrong = document.createElement("strong");
           let buttonDelete = document.createElement("button");
   
           archiveSpan.textContent = archiveName;
           archiveStrong.textContent = `Total amount: ${(price * count).toFixed(2)}`;
           buttonDelete.textContent = "Delete";
           buttonDelete.addEventListener("click",deleteArchvie)
   
           archiveLi.appendChild(archiveSpan);
           archiveLi.appendChild(archiveStrong);
           archiveLi.appendChild(buttonDelete);
   
           archiveUl.appendChild(archiveLi);
   
           parentLi.remove();
       }
   
  }

  function deleteArchvie(event){
       let li = event.target.parentElement;
       li.remove();
  }

  function clearArchive(event){
       let section = event.target.parentElement;
       let ul = section.querySelector("ul");
       let lis = Array.from(ul.querySelectorAll("li"));

       for(let li of lis){
           li.remove();
       }
  }
}
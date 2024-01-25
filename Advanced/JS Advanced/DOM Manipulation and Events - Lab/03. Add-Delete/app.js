function addItem() {
    let inputElement = document.getElementById("newItemText");
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = "[Delete]";
    a.href = "#";
    a.addEventListener("click",deleteElement);
    li.textContent = inputElement.value;
    let ulElement = document.getElementById("items");
    li.appendChild(a);
    if(li.textContent != ""){
        ulElement.appendChild(li);
    }

    function deleteElement(event){
        let clickedElement = event.target;
        let liElement = clickedElement.parentElement;
        liElement.parentElement.removeChild(liElement);
    }

    inputElement.value = "";
}
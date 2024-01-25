function addItem() {
    let inputElement = document.getElementById("newItemText");
    let li = document.createElement("li");
    li.textContent = inputElement.value;
    let ulElement = document.getElementById("items");
    ulElement.appendChild(li);
    inputElement.value = "";
}
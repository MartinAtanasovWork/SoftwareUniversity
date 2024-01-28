function addItem() {
    let textElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");
    let select = document.getElementById("menu");
    let option = document.createElement("option");
    option.textContent = textElement.value;
    option.value = valueElement.value;
    select.appendChild(option);
    textElement.value = "";
    valueElement.value = "";
}
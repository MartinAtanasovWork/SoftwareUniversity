function solve() {
  let [generateButton,butButton] = Array.from(document.querySelectorAll("button"));

  generateButton.addEventListener("click",generate);
  butButton.addEventListener("click",buy);

  function generate(){
    let textarea = document.querySelector("textarea");
    let tableBody = document.querySelector("tbody");
    let arr = JSON.parse(textarea.value);
    for(let item of arr){
      let tr = document.createElement("tr");

      let tdImg = document.createElement("td");
      let tdName = document.createElement("td");
      let tdPrice = document.createElement("td");
      let tdDecor = document.createElement("td");
      let tdMark = document.createElement("td");

      let img = document.createElement("img");
      img.src = `${item["img"]}`;
      let input = document.createElement("input");
      input.type = "checkbox";

      tdImg.appendChild(img);
      tdName.textContent = item["name"];
      tdPrice.textContent = Number(item["price"]);
      tdDecor.textContent = item["decFactor"];
      tdMark.appendChild(input);

      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecor);
      tr.appendChild(tdMark);
      
      tableBody.appendChild(tr);
    }
  }

  function buy(){
      let inputs = Array.from(document.querySelectorAll("input"));
      let textarea = Array.from(document.querySelectorAll("textarea"))[1];
      let items = [];
      let price = 0;
      let decFactor = 0;
      for(let input of inputs){
        if(input.checked){
          let tdElement = input.parentElement;
          let trElement = tdElement.parentElement;
          let tds = Array.from(trElement.children);
          items.push(tds[1].textContent);
          price += Number(tds[2].textContent);
          decFactor += Number(tds[3].textContent);
        }
      }
      decFactor /= items.length;
      textarea.value += `Bought furniture: ${items.join(", ")}` + "\n";
      textarea.value += `Total price: ${price.toFixed(2)}` + "\n";
      textarea.value += `Average decoration factor: ${decFactor}`
  }
}
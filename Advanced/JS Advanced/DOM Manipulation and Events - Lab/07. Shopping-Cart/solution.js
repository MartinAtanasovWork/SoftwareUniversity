function solve() {
   let buttons = Array.from(document.querySelectorAll("button.add-product"));
   let checkButton = document.querySelector("button.checkout");
   checkButton.addEventListener("click",clickedCheckout)
   let sum = 0;
   let listOfElements = [];
   for(let button of buttons){
      button.addEventListener("click",clicked);
   }

   function clicked(event){
      let buttonParent = event.target.parentElement;
      let grandparent = buttonParent.parentElement;
      let name = grandparent.querySelector("div.product-details div.product-title").textContent;
      let price = Number(grandparent.querySelector("div.product-line-price").textContent);
      sum += price;
      if(!listOfElements.includes(name)){
         listOfElements.push(name)
      }
      let textarea = document.getElementsByTagName("textarea")[0];
      textarea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
   }  

   function clickedCheckout(event){
      let textarea = document.getElementsByTagName("textarea")[0];
      textarea.textContent += `You bought ${listOfElements.join(", ")} for ${sum.toFixed(2)}.`
      event.target.removeEventListener("click",clickedCheckout)
      for(let button of buttons){
         button.removeEventListener("click",clicked);
      }
   }
}
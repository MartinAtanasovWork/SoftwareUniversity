function create(words) {
   let content = document.getElementById("content");
   for(let word of words){
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click",clicked);
      content.appendChild(div);
   }

   function clicked(event){
      let div = event.target;
      let p = div.querySelector("p");
      p.style.display = "block";
   }
}
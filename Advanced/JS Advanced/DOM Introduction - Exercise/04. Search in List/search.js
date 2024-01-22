function search() {
   let lis = document.querySelectorAll("ul#towns li");
   let search = document.getElementById("searchText").value;
   let arr = Array.from(lis);
   for(let li of arr){
      li.style.te
      xtDecoration = "";
   }
   let matches = 0;
   for(let li of arr){
      let content = li.textContent;
      if(content.match(search)){
         li.style.textDecoration = "underline";
         li.style.fontWeight = "bold";
         matches++;
      }
   }
   document.getElementById("result").textContent = `${matches} matches found`;
}

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll("tbody tr");
      let search = document.getElementById("searchField").value;
      for(let row of rows){
         let cells = Array.from(row.querySelectorAll("td"));
         for(let cell of cells){
            if(cell.textContent.match(search)){
               row.classList.add("select");
               break;
            }else{
               row.classList.remove("select");
            }
         }
      }
      document.getElementById("searchField").value = "";
   }
}
function colorize() {
    let evenElems = document.querySelectorAll("tr");
    let index = 0;
    for(let el of evenElems){
        index++;
        if(index % 2 == 0){
            el.style.background = "Teal";
        }
    }
}
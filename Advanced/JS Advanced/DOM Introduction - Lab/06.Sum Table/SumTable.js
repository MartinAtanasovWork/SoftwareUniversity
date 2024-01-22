function sumTable() {
    let elems = document.querySelectorAll("td");
    let arr = Array.from(elems);
    arr.shift();
    let sum = 0;
    let index = 0;
    for(let el of arr){
        if(index % 2 == 0){
            console.log(el.textContent);
            sum += Number(el.textContent);
        }
        index++;
    }
    document.getElementById("sum").textContent = sum;
}
function extract(content) {
    let pattern = /\(([\w ]*)\)/g;
    let contentElem = document.getElementById(content).textContent;
    let matches = contentElem.match(pattern);
    let result = [];
    for(let el of matches){
        let modified = el.slice(1,el.length-1);
        result.push(modified);
    }
    return result.join("; ");
}
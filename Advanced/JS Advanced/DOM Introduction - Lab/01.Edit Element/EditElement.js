function editElement(el,string,replace) {
    let result = el.textContent.split(string).join(replace);
    el.textContent = result;
}
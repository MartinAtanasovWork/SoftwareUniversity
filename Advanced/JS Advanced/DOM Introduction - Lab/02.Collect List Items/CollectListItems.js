function extractText() {
    let parent = document.getElementById("items");
    let children = parent.children;
    let childrenArr = Array.from(children).map(a => a.textContent);
    let result = childrenArr.join("\n");
    let textarea = document.getElementById("result");
    textarea.textContent = result;
}
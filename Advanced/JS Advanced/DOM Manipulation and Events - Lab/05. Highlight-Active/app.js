function focused() {
    let inputElements = Array.from(document.querySelectorAll("input"));
    for(let input of inputElements){
        input.addEventListener("focus",inputFocused);
        input.addEventListener("blur",inputBlured);
    }

    function inputFocused(event){
        let focusedInput = event.target;
        let divParent = focusedInput.parentElement;
        divParent.classList.add("focused");
    }

    function inputBlured(event){
        let focusedInput = event.target;
        let divParent = focusedInput.parentElement;
        divParent.classList.remove("focused");
    }
}
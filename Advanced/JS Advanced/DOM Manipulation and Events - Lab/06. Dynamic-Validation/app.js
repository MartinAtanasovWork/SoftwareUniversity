function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;
    let email = document.getElementById("email");
    email.addEventListener("change",validateEmail)

    function validateEmail(event){
        let text = event.target.value;
        if(pattern.exec(text) === null){
            email.classList.add("error");
        }else{
            email.classList.remove("error");
        }
    }
}
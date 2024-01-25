function deleteByEmail() {
    let searchedEmail = document.querySelector('[name="email"]').value;
    let emails = Array.from(document.querySelectorAll("table tbody tr td:nth-child(2)"));
    let result = document.getElementById("result");
    let deleted = false;
    for(let email of emails){
        if(email.textContent == searchedEmail){
            email.parentElement.parentElement.removeChild(email.parentElement);
            deleted = true;
        }
    }  
    if(deleted){
        result.textContent = "Deleted.";
    }else{
        result.textContent = "Not found.";
    }
}
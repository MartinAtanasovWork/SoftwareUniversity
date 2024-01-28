function lockedProfile() {
    let people = Array.from(document.querySelectorAll("div.profile"));

    for(let person of people){
        makePerson(person);
    }

    function makePerson(parentDiv){
        let button = parentDiv.querySelector("button");
        let [lock,unlock] = parentDiv.querySelectorAll('input[type="radio"]');
        lock.addEventListener("click",buttonLocked);
        unlock.addEventListener("click",buttonUnlocked);
        if(lock.checked){
            button.removeEventListener("click",show);
        }else if(unlock.checked){
            button.addEventListener("click",show);
        }
       
    }

    function show(event){
        let button = event.target;
        let parent = button.parentElement;
        let divElement = parent.querySelector("div");
        if(button.textContent == "Show more"){
            divElement.style.display = "block";
            button.textContent = "Hide it";
        }else if(button.textContent == "Hide it"){
            divElement.style.display = "none";
            button.textContent = "Show more";
        }
    }

    function buttonLocked(event){
        let parent = event.target.parentElement;
        let button = parent.querySelector("button");
        button.removeEventListener("click",show);
    }

    function buttonUnlocked(event){
        let parent = event.target.parentElement;
        let button = parent.querySelector("button");
        button.addEventListener("click",show);
    }
}
window.addEventListener('load', solve);

function solve() {
    let form = document.querySelector("form");
    form.addEventListener("submit",prev);
    function prev(event){
        event.preventDefault();
    }

    let nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click",makeReservation);

    function makeReservation(){
        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let dateIn = document.getElementById("date-in").value;
        let dateOut = document.getElementById("date-out").value;
        let peopleCount = document.getElementById("people-count").value;
        
                       
        if(firstName != "" && lastName != "" && dateIn != "" && dateOut != "" && peopleCount != ""){
            let ul = document.getElementsByClassName('info-list')[0];
            let liElement = createLiElement("Edit","Continue");

            ul.appendChild(liElement);
            document.getElementById("first-name").value = "";
            document.getElementById("last-name").value = "";
            document.getElementById("date-in").value = "";
            document.getElementById("date-out").value = "";
            document.getElementById("people-count").value = "";
            nextBtn.setAttribute("disabled",true);
        }

        function createLiElement(btn1,btn2){
            let li = document.createElement("li");
            li.classList.add("reservation-content");

            let article = document.createElement("article");

            let h3 = document.createElement("h3");
            h3.textContent = `Name: ${firstName} ${lastName}`;
            
            let pFromDate = document.createElement("p");
            pFromDate.textContent = `From date: ${dateIn}`;

            let pToDate = document.createElement("p");
            pToDate.textContent = `To date: ${dateOut}`;

            let pPeople = document.createElement("p");
            pPeople.textContent = `For ${peopleCount} people`;

            let button1 = document.createElement("button");
            let button2 = document.createElement("button");

            button1.classList.add(`${btn1.toLowerCase()}-btn`);
            button2.classList.add(`${btn2.toLowerCase()}-btn`);
            button1.textContent = btn1;
            button2.textContent = btn2;
                        
            if(btn1 == "Edit" && btn2 == "Continue"){
                button1.addEventListener("click",edit);
                button2.addEventListener("click",confirmReservation)
            }else{
                button1.addEventListener("click",confirmRes);
                button2.addEventListener("click",cancelRes);
            }
       

            article.appendChild(h3);
            article.appendChild(pFromDate);
            article.appendChild(pToDate);
            article.appendChild(pPeople);
            
            li.appendChild(article);
            li.appendChild(button1);
            li.appendChild(button2);

            function edit(event){
                document.getElementById("first-name").value = firstName;
                document.getElementById("last-name").value = lastName;
                document.getElementById("date-in").value = dateIn;
                document.getElementById("date-out").value = dateOut;
                document.getElementById("people-count").value = peopleCount;

                event.target.parentElement.remove();
                nextBtn.removeAttribute("disabled");
            }

            function confirmReservation(event){
                event.target.parentElement.remove();

                let ul = document.querySelector(".confirm-list");
                let li = createLiElement("Confirm","Cancel");
                
                ul.appendChild(li);
            }

            function confirmRes(event){
                event.target.parentElement.remove();

                let ver = document.getElementById("verification");
                ver.classList.add("reservation-confirmed");
                ver.textContent = "Confirmed.";

                nextBtn.classList.remove("reservation-cancelled")
                nextBtn.removeAttribute("disabled");
            }

            function cancelRes(event){
                event.target.parentElement.remove();
                
                let ver = document.getElementById("verification");
                ver.classList.add("reservation-cancelled");
                ver.textContent = "Cancelled.";

                nextBtn.classList.remove("reservation-confirmed")
                nextBtn.removeAttribute("disabled");
            }
            return li;
        }
    }
}
    
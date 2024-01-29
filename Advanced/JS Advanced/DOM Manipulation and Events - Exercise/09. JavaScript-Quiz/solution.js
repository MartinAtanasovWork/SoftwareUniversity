function solve() {
  let sections = Array.from(document.querySelectorAll("section"));
  let answers = 0;
  let sec = 0;
  for(let section of sections){
    let btns = Array.from(section.querySelectorAll("ul li.quiz-answer div"));
    for(let el of btns){
      el.addEventListener("click",clicked)
    }
  }

  function clicked(event){
    let answer = event.target.textContent;
    let result = document.getElementById("results");
    if(answer == "onclick" || answer == "JSON.stringify()" || answer == "A programming API for HTML and XML documents"){
      answers++;
    }
    sec++;
    let div = event.target.parentElement;
    let li = div.parentElement;
    let ul = li.parentElement;
    let section = ul.parentElement;
    let parentDiv = section.parentElement;
    let sectionElements = Array.from(parentDiv.querySelectorAll("section"));
    section.style.display = "none";
    if(sec < 3){
      sectionElements[sec].style.display = "block";
    }
    if(sec == 3){
      let h1 = result.querySelector("li h1");
      if(answers == 3){
        h1.textContent = `You are recognized as top JavaScript fan!`
      }else{
        h1.textContent = `You have ${answers} right answers`
      }
      result.style.display = "block";
    }
  }
}

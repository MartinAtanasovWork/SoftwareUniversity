export function hideAllButOne(id){
    let sections = Array.from(document.querySelectorAll(".view-section"));

    for(let section of  sections){
        section.style.display = "none";
    }

    let specSection = document.getElementById(id);
    specSection.style.display = "block";
}

//User menu options
let menuStart = document.getElementById("menu-start");
let menuAboutMe = document.getElementById("menu-about-me");
let menuSkills = document.getElementById("menu-skills");
let menuProjects = document.getElementById("menu-projects");
let menuContact = document.getElementById("menu-contact");

//Information sections
let start = document.getElementById("start-section");
let aboutMe = document.getElementById("about-me-section");
let skills = document.getElementById("skills-section");
let projects = document.getElementById("project-section");
let contact = document.getElementById("contact-section");

//Hides all sections except "start" when page is loaded
/**/
let reset = function(){
    /*start.style.display = "block";
    aboutMe.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";*/


    aboutMe.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    start.style.display = "block";
    start.style.visibility = "hidden";

    setTimeout(() => {
        start.style.visibility = "visible";
    }, 100)
}

//Eventlisteners
//Start menu button
menuStart.addEventListener("click", function(){
    start.style.visibility = "hidden";
    start.style.display = "block";
    aboutMe.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    setTimeout(() => {
        start.style.visibility = "visible";
    }, 100)
})
//About me menu button
menuAboutMe.addEventListener("click", function(){
    start.style.display = "none";
    aboutMe.style.visibility = "hidden";
    aboutMe.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    setTimeout(() => {
        aboutMe.style.visibility = "visible";
    }, 100)
})
//Skills menu button
menuSkills.addEventListener("click", function(){
    start.style.display = "none";
    aboutMe.style.display = "none";
    skills.style.visibility = "hidden";
    skills.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";

    setTimeout(() => {
        skills.style.visibility = "visible";
    }, 100)
})
//Projects menu button
menuProjects.addEventListener("click", function(){
    start.style.display = "none";
    aboutMe.style.display = "none";
    skills.style.display = "none";
    projects.style.visibility = "hidden";
    projects.style.display = "block";
    contact.style.display = "none";

    setTimeout(() => {
        projects.style.visibility = "visible";
    }, 100)
})
//Contact menu button
menuContact.addEventListener("click", function(){
    start.style.display = "none";
    aboutMe.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.visibility = "hidden";
    contact.style.display = "block";

    setTimeout(() => {
        contact.style.visibility = "visible";
    }, 100)
})

reset();

//Log screen size to console
let innerX = window.innerWidth;
let innerY = window.innerHeight;
let windowX = window.outerWidth
let windowY = window.outerHeight
console.log(`Inner size: ${innerX} x ${innerY}`);
console.log(`Outer size: ${windowX} x ${windowY}`);
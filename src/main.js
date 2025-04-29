//Todo
//Ta bort ram för max storlek
//Ändra så att mobilmenyn går över innehållet
//Ändra till dvw
//Animation av details


//User menu options
//let menuStart = document.getElementById("menu-start");
//let menuAboutMe = document.getElementById("menu-about-me");
//let menuSkills = document.getElementById("menu-skills");
//let menuProjects = document.getElementById("menu-projects");
//let menuContact = document.getElementById("menu-contact");

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

    CloseMobileMenu();

    setTimeout(() => {
        start.style.visibility = "visible";
    }, 100)

}

//Eventlisteners
//Start menu button
document.querySelectorAll('.menu-start').forEach(function(element) {
    element.addEventListener("click", function(){
        CloseMobileMenu();
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
})

//About me menu button
document.querySelectorAll('.menu-about-me').forEach(function(element) {
    element.addEventListener("click", function(){
        CloseMobileMenu();
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
})

//Skills menu button
document.querySelectorAll('.menu-skills').forEach(function(element) {
    element.addEventListener("click", function(){
        CloseMobileMenu();
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
})

//Projects menu button
document.querySelectorAll('.menu-projects').forEach(function(element) {
        element.addEventListener("click", function(){
        CloseMobileMenu();
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
})


//Contact menu button
document.querySelectorAll('.menu-contact').forEach(function(element) {
    element.addEventListener("click", function(){
        CloseMobileMenu();
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
})


reset();


//Add "close function" to X icon
let xIcons = document.querySelectorAll('.x-icon').forEach(function(element) {
    element.addEventListener("click", function(){
        reset();
    })
})


//Function to close mobile menu when an item is clicked
let mobileMenuToggle = document.getElementById('mobile-menu-toggle');

function CloseMobileMenu(){

    let menuComponent = document.getElementById('menu-component-mobile');
    let displayStyle = window.getComputedStyle(menuComponent).display;

    if (displayStyle != 'none') {
        //Closes the mobile menu
        document.getElementById("mobile-menu-toggle").checked = false;
        scrollTo(top);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("menu-component-mobile");

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            setTimeout(() => {
                mobileMenu.scrollIntoView({behavior: "smooth", block: "end"});
            }, 200);
        }
    });
});

//to copy email address when clicked
document.getElementById('email-address').addEventListener('click', function(){
    navigator.clipboard.writeText
                ("info@frans183.se");
})
//frans.lindstrom.webd23jon@edu.tucsweden.se

//Log screen size to console
let innerX = window.innerWidth;
let innerY = window.innerHeight;
let windowX = window.outerWidth
let windowY = window.outerHeight
console.log(`Inner size: ${innerX} x ${innerY}`);
console.log(`Outer size: ${windowX} x ${windowY}`);


/*
const path = document.querySelector("#wave-svg path");
let step = 0;

function animateWave() {
  step += 0.008; // Hastigheten på vågorna
  const amplitude = 12; // Hur höga vågorna ska vara
  const frequency = 10; // Hur breda vågorna ska vara

  let newD = "M0,0 "; // Startpunkt
  for (let i = 0; i <= 1440; i += frequency) { // 1440 = svg bredden
    let y = Math.sin((i + step * 100) * 0.01) * amplitude + 50;
    newD += `L${i},${y} `;
  }
  newD += "L1440,120 L0,120 Z"; // Avslutar vågen

  path.setAttribute("d", newD);
  requestAnimationFrame(animateWave);
}

animateWave();*/
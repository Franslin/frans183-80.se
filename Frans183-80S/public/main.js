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
/* OLD
//Eventlistener to scroll menu into view when checkbox is clicked
document.getElementById('mobile-menu-toggle').addEventListener("click", function(){
        if(document.getElementById('mobile-menu-toggle').checked){

            //Scrolls the menu into view
            const start = window.scrollY;
            const end = document.body.scrollHeight;
            const distance = end - start;
            const startTime = performance.now();
        
            function scroll(timestamp) {
                const currentTime = timestamp - startTime;
                const progress = Math.min(currentTime / 500, 1); // Begränsa progress till 1
                window.scrollTo(0, start + distance * progress);
        
                if (progress < 1) {
                    requestAnimationFrame(scroll);
                }
            }
            requestAnimationFrame(scroll);
        }
    })

*/
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


//New mobile menu toggle
//let menuToggle = document.getElementById("mobile-menu-toggle");
//let footerContainer = document.getElementById("footer-and-menu-container");
//let contentContainer = document.getElementById("container");

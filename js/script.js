/* ==========================================================
   PROJECT POLARIS v1.0
   Executive Portfolio
   script.js
========================================================== */


/* ==========================================================
   SMOOTH ACTIVE NAVIGATION
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================================
   HEADER SHADOW
========================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80){

        header.style.boxShadow =

        "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});


/* ==========================================================
   FADE IN ON SCROLL
========================================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".section-heading,.project-card,.portfolio-card,.industry-card,.timeline-item,.contact-card,.cert-card,.insight-card,.highlight-card"

).forEach(el=>{

    el.classList.add("hidden-section");

    observer.observe(el);

});


/* ==========================================================
   COUNTER ANIMATION
========================================================== */

const counters = document.querySelectorAll(".stat-card h3");

const speed = 80;

counters.forEach(counter=>{

    const text = counter.innerText;

    const number = parseInt(text);

    if(isNaN(number)) return;

    counter.innerText = "0";

    const update = ()=>{

        const current = +counter.innerText;

        const increment = Math.ceil(number/speed);

        if(current<number){

            counter.innerText=current+increment;

            setTimeout(update,20);

        }else{

            counter.innerText=text;

        }

    };

    update();

});


/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.className="scroll-top";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================================
   CURRENT YEAR
========================================================== */

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

document.addEventListener("contextmenu", function(e){

    if(e.target.tagName==="IMG"){

        e.preventDefault();

    }

});

/* ==========================================
   CONTENT PROTECTION
========================================== */

document.addEventListener("copy", function(e){
    e.preventDefault();
});

document.addEventListener("cut", function(e){
    e.preventDefault();
});

document.addEventListener("paste", function(e){
    e.preventDefault();
});

document.addEventListener("keydown", function(e){

    // Ctrl/Cmd + C
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
        e.preventDefault();
    }

    // Ctrl/Cmd + X
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
        e.preventDefault();
    }

    // Ctrl/Cmd + A
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a") {
        e.preventDefault();
    }

    // Ctrl/Cmd + S
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }

});

document.addEventListener("keydown", function(e){

    if(e.key==="F12"){

        e.preventDefault();

    }

    if(e.ctrlKey && e.shiftKey && e.key==="I"){

        e.preventDefault();

    }

    if(e.ctrlKey && e.shiftKey && e.key==="J"){

        e.preventDefault();

    }

    if(e.ctrlKey && e.key==="U"){

        e.preventDefault();

    }

});



/* ==========================================================
   END
========================================================== */
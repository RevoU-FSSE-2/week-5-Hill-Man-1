// READ MORE //

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read More";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read More";
        moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read More";
        moreText.style.display = "inline";
    }
}

// END READ MORE //


// ANIMATION SLIDE SHOW CLIENT //

var copy = document.querySelector('.logo_slide').cloneNode(true);//
document.querySelector('.logo').appendChild(copy);//


let label = document.querySelectorAll('label').forEach(label => {
    label.innerHTML = label.innerText.split('').map
    ((Letters,i) => `<span style="transition-delay: ${i*50}ms">${Letters}</span>`).join('');
})

// END SLIDE SHOW CLIENT //

// REVEAL //
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// END REVEAL //


// ACTIVE SECTION //

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active-link")
    } else {
        document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
    })
}

// END ACTIVE SECTION //

// BURGER //

const   navMenu = document.getElementById('sidebar'),
        navToggle = document.getElementById('burger_btn'),
        navClose = document.getElementById('nav_close')
    
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-sidebar')
        navMenu.classList.remove('remove-sidebar')
    })
}

if (navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.add('remove-sidebar')
        navMenu.classList.remove('show-sidebar')
    })
}

// END BURGER //



var header = document.querySelector("header");
var hero = document.querySelector(".hero-section");
var menuBtn = document.querySelectorAll(".menu-btn");
var special = document.querySelector(".special");
var dinner = document.querySelector(".dinner");
var brakefirst = document.querySelector(".brakefirst");
var lunch = document.querySelector(".lunch");
var activeIndex = 0;
var scrollDown;
var currentScroll = 0;

window.onload = function () {
    document.querySelector(".spin").style.opacity = "0";
    document.querySelector(".spinner-logo").style.opacity = "0";
    setTimeout(function(){
        document.querySelector(".spinner").style.opacity = "0";
    }, 2000)
    setTimeout(function(){
        document.querySelector(".spinner").style.display = "none";
        document.body.style.overflowY = "scroll";
        document.querySelector(".hero-content span").style.animation = "fadeInRight 800ms forwards";
        document.querySelector(".hero-content h1").style.animation = "fadeInRight 800ms 200ms forwards";
        document.querySelector(".hero-content p").style.animation = "fadeInRight 800ms 500ms forwards";
        document.querySelector(".hero-content .btn").style.animation = "fadeInRight 800ms 800ms forwards";
    }, 2500)

}

window.addEventListener("scroll", function () {
    if (window.scrollY > currentScroll) {
        scrollDown = true;
    }
    else {
        scrollDown = false;
    }
    currentScroll = window.scrollY;
    
    if (window.scrollY <= header.offsetHeight) {
        header.style.position = "static"
        header.style.top = "0";
        header.style.left = "0";
        header.style.right = "0";
        header.style.transform = "translateY(0)";
        hero.style.marginTop = "0";
        header.style.opacity = "1";
        header.style.backgroundColor = "var(--light-gray)";
    }
    else if (window.scrollY == 500 && !scrollDown) {
        header.style.position = "fixed";
        // header.style.transform = "translateY(0)";
        header.style.top = "-126px";
        header.style.opacity = "0";
        hero.style.marginTop = header.offsetHeight;
        header.style.backgroundColor = "#fff";
        console.log("> 126")
    }
    else if (window.scrollY < 500 && window.scrollY > header.offsetHeight) {
        header.style.position = "fixed";
        header.style.transform = "translateY(-100%)";
        header.style.top = "-126px";
        header.style.opacity = "0";
        hero.style.marginTop = header.offsetHeight;
        header.style.backgroundColor = "#fff";
    }
    else if (window.scrollY >= 500) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.right = "0";
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
        // header.style.animation = "fadeInDown 500ms forwards";
        hero.style.marginTop = header.offsetHeight;
        header.style.backgroundColor = "#fff";
        console.log("> 500");
    }

})


menuBtn[0].addEventListener("click", function(){
    menuBtn[activeIndex].classList.replace("active-tab", "nonactive-tab");
    menuBtn[0].classList.replace("nonactive-tab", "active-tab");
    activeIndex = 0;
    special.style.opacity = "1";
    lunch.style.opacity = "0";
    brakefirst.style.opacity = "0";
    dinner.style.opacity = "0";
})

menuBtn[1].addEventListener("click", function(){
    menuBtn[activeIndex].classList.replace("active-tab", "nonactive-tab");
    menuBtn[1].classList.replace("nonactive-tab", "active-tab");
    activeIndex = 1;
    special.style.opacity = "0";
    lunch.style.opacity = "1";
    brakefirst.style.opacity = "0";
    dinner.style.opacity = "0";
})

menuBtn[2].addEventListener("click", function(){
    menuBtn[activeIndex].classList.replace("active-tab", "nonactive-tab");
    menuBtn[2].classList.replace("nonactive-tab", "active-tab");
    activeIndex = 2;
    special.style.opacity = "0";
    lunch.style.opacity = "0";
    brakefirst.style.opacity = "1";
    dinner.style.opacity = "0";
})

menuBtn[3].addEventListener("click", function(){
    menuBtn[activeIndex].classList.replace("active-tab", "nonactive-tab");
    menuBtn[3].classList.replace("nonactive-tab", "active-tab");
    activeIndex = 3;
    special.style.opacity = "0";
    lunch.style.opacity = "0";
    brakefirst.style.opacity = "0";
    dinner.style.opacity = "1";
})

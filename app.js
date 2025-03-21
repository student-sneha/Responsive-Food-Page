const menuBar = document.getElementById("menubar");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = document.querySelector("i");

menuBar.addEventListener("click",() =>{
    navLinks.classList.toggle("active");
    
    const isOpen = navLinks.classList.contains("active");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark":"fa-soild fa-bars");

    if(menuBtnIcon.className === "fa-solid fa-xmark"){
        menuBtnIcon.setAttribute("class", "fa-solid fa-xmark");
    }else{
        menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
    }
})
navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("active");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
})

// Swiper class to use silder in website
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400:{
            slidesPerView:1,
        },  
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Scroll Behaviour
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header_container form", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".feature__card", {
    duration: 1000,
    interval: 500,
  });
  
  ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".package__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
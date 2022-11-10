let currentSlide = 1;
showSlide(currentSlide)

function showNavigation() {
    let navBtn = document.getElementsByClassName("nav");
    for (nav of navBtn) {
        nav.style.display = "block"
    }
}

function hideNavigation() {
    let navBtn = document.getElementsByClassName("nav");
    for (nav of navBtn) {
        nav.style.display = "none"
    }
}


function nextSlide(value) {
    showSlide(currentSlide += value)
}

function showSlide(value) {
    let allSlides = document.getElementsByClassName("slide");
    
    for (slide of allSlides) {
        slide.style.display = "none";
    }
    
    if (value > allSlides.length) currentSlide = 1;
    if (value < 1) currentSlide = allSlides.length;

    allSlides[currentSlide-1].style.display = "block";
}

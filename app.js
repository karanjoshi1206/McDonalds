function slider(imgsrc) {
    document.querySelector(".burger").src = imgsrc
}
function changecolor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}
function toggle() {
    const hamburger = document.querySelector(".toggle")
    hamburger.classList.toggle("show")
    nav = document.querySelector(".nav")
    nav.classList.toggle("show")
    if (hamburger.innerHTML == '<i class="fa fa-times" aria-hidden="true"></i>') {
        hamburger.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
    }
    else if (hamburger.innerHTML == '<i class="fa fa-bars" aria-hidden="true"></i>') {
        hamburger.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    }
}
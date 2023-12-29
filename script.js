const navBars = document.querySelector(".hamburger-menu")
const navLinks = document.querySelector(".nav-links")

navBars.addEventListener("click" , () => {
    navLinks.classList.add("active");
})

const navX = document.querySelector(".hamburger-menu-close")

navX.addEventListener("click", () => {
    navLinks.classList.remove("active");
})

let links = document.querySelectorAll(".link");
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
}





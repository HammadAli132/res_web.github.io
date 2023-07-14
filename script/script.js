const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navItems");
const navBar = document.querySelector(".navbar");
hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
    navBar.classList.toggle("active");
}
document.querySelectorAll(".navItems").forEach(n=>n.onclick = ()=>{
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
    navBar.classList.remove("active");
})
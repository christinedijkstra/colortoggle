const bodyBackground = document.querySelector(".body-background");
const dropdown = document.querySelector(".dropdown");
const getSidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const whiteBG = document.querySelector(".white");
const redBG = document.querySelector(".red");
const orangeBG = document.querySelector(".orange");
const purpleBG = document.querySelector(".purple");
const greenBG = document.querySelector (".green");
const homeBG = document.querySelector (".home");

menu.addEventListener("click", function() {
    getSidebar.classList.add("visible");
})

getSidebar.addEventListener("click", function() {
getSidebar.classList.remove("visible");
})

whiteBG.addEventListener("click", function () {
    bodyBackground.className = "white";
    dropdown.classList.remove("visible");
})

redBG.addEventListener("click", function () {
    bodyBackground.className = "red";
    dropdown.classList.remove("visible");
})

orangeBG.addEventListener("click", function () {
    bodyBackground.className = "orange";
    dropdown.classList.remove("visible");
})

purpleBG.addEventListener("click", function () {
    bodyBackground.className = "purple";
    dropdown.classList.remove("visible");
})

greenBG.addEventListener("click", function () {
    bodyBackground.className = "green";
    dropdown.classList.remove("visible");
})

homeBG.addEventListener("click", function () {
    bodyBackground.className = "home";
    dropdown.classList.remove("visible");
})

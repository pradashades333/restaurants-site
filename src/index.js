import createHome from "./home.js";
import createContact from "./contact.js";
import createMenu from "./menu.js";
import "./style.css";

createHome();


const home = document.getElementById("home-button")
const contact = document.getElementById("contact-button")
const menu = document.getElementById("menu-button")

home.addEventListener("click", () => {
    createHome();
})

menu.addEventListener("click", () => {
    createMenu();
})

contact.addEventListener("click", () => {
    createContact();
})
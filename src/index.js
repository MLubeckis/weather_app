import "./asset/css/main.css";
import "./asset/css/mayer_reset.css";
import { updateSelection } from "./models/fetchAddress";
import { getWeatherData } from "./models/fetchWeather";
import { initWeatherCarousel } from "./models/weatherCarousel.js";
import './models/weatherCarousel.js'
//import "./asset/css/embla.css"
console.log("Hello World!");

document
    .querySelector(".location-search input")
    .addEventListener("focus", () => {
        document.querySelector(".dropdown-addreses").classList.toggle("show");
    });

let time = null;
document
    .querySelector(".location-search input")
    .addEventListener("keyup", (e) => {
        const div = document.querySelector('.dropdown-addreses');
        const address = e.target.value;
        clearTimeout(time);
        time = setTimeout(() => {
            updateSelection(div, address);
        }, 600);
    });

document.querySelector('.getWeather').addEventListener('click', ()=>{
    const adress = document.querySelector(".location-search input").value || 'Riga, Latvija';
    initWeatherCarousel(adress);
})

window.addEventListener("mousedown", (e) => {
    const addressInputField = document.querySelector(".location-search input");
    if (e.target.classList == "dd") {
        addressInputField.value =
            e.target.textContent;
        document.querySelector(".dropdown-addreses").classList.toggle("show");
    } else if(e.target != addressInputField){
        document.querySelector(".dropdown-addreses").classList.remove("show");
    } 
});

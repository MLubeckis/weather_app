import "./asset/css/main.css";
import "./asset/css/mayer_reset.css";
import { getAddresses, updateSelection } from "./models/fetchAddress";
console.log("Hello World!");

document
    .querySelector(".location-search input")
    .addEventListener("focus", () => {
        document.querySelector(".dropdown-addreses").classList.toggle("show");
    });

// document.querySelector('.location-search input').addEventListener('focusout', () => {
//     document.querySelector('.dropdown-addreses').classList.toggle('show');
// })

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

window.addEventListener("mousedown", (e) => {
    const addressInputField = document.querySelector(".location-search input");
    // console.log(document.querySelector('.dropdown-addreses').classList);
    if (e.target.classList == "dd") {
        addressInputField.value =
            e.target.textContent;
        document.querySelector(".dropdown-addreses").classList.toggle("show");
    } else if(e.target != addressInputField){
        document.querySelector(".dropdown-addreses").classList.remove("show");
    }
});

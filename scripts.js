
let backgroundImage = document.querySelector("#bg");
const contactBox = document.querySelector("article");
const navbar = document.querySelector("nav");

navbar.addEventListener("click", event => {
    let clicked = event.target.classList.value;
    switch (clicked) {
        case "one":
            backgroundImage.src = "img/01.jpg";
            break;
        case "two":
            backgroundImage.src = "img/02.jpg";
            break;
        case "three":
            backgroundImage.src = "img/03.jpg";
            break;
        case "contact":
            showContactBox();
            break;
        default:
            return;
    }
    return;
});

const showContactBox = () => {
    return contactBox.style.display === "none" ? contactBox.style.display = "block" : contactBox.style.display = "none";
}

let celsiusID = document.getElementById("Celsius");
let fahrenheitID = document.getElementById("Fahrenheit");
let geegoidsID = document.getElementById("Geegoids");
let kelvinID = document.getElementById("Kelvin");
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
let userTextID = document.getElementById("user-text");

function showReview() { 
    for (let userPic of userPics) {
        userPic.classList.remove("active-pic");
    }

    for (let userText of userTexts) {
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

for (let i = 0; i < userPics.length; i++) {
    userPics[i].addEventListener("click", showReview);
}

celsiusID.addEventListener("input", function () {
    geegoidsID.value = 0.000367899 * celsiusID.value + 1;
    fahrenheitID.value = ((9/5) * celsiusID.value) + 32;
    kelvinID.value = (fahrenheitID.value - 32) * (5/9) + 273.15;
});

geegoidsID.addEventListener("input", function () {
    celsiusID.value = 928.85833 * Math.pow(geegoidsID.value, 3) + (-2873.15) * Math.pow(geegoidsID.value, 2) + 2217.44167 * geegoidsID.value + -273.15;
    fahrenheitID.value = ((9/5) * celsiusID.value) + 32;
    kelvinID.value = (fahrenheitID.value - 32) * (5/9) + 273.15;
});

fahrenheitID.addEventListener("input", function () {
    celsiusID.value = (fahrenheitID.value - 32) * (5/9);
    geegoidsID.value = 0.000367899 * celsiusID.value + 1;
    kelvinID.value = (fahrenheitID.value - 32) * (5/9) + 273.15;
});

kelvinID.addEventListener("input", function() {
    celsiusID.value = kelvinID.value - 273.15;
    geegoidsID.value = 0.000367899 * celsiusID.value + 1;
    fahrenheitID.value = ((9/5) * celsiusID.value) + 32;
});

button.addEventListener("click", toggle_style);

let celsiusID = document.getElementById("Celsius");
let fahrenheitID = document.getElementById("Fahrenheit");
let geegoidsID = document.getElementById("Geegoids");

celsiusID.addEventListener("input", function () {
    geegoidsID.value = 0.000367899 * celsiusID.value + 1.00087;
    fahrenheitID.value = ((9/5) * celsiusID.value) + 32;
});

geegoidsID.addEventListener("input", function () {
    celsiusID.value = 928.85833 * Math.pow(geegoidsID.value, 3) + (-2873.15) * Math.pow(geegoidsID.value, 2) + 2217.44167 * geegoidsID.value + -273.15;
    fahrenheitID.value = ((9/5) * celsiusID.value) + 32;
});

fahrenheitID.addEventListener("input", function () {
    celsiusID.value = (fahrenheitID.value - 32) * (5/9);
    geegoidsID.value = 0.000367899 * celsiusID.value + 1.00087;
});

new Twitch.Player("twitch-embed", {
    channel: "geega"
  });
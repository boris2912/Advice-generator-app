let text = document.getElementById("paragraph");
let button = document.getElementById("button");
let adviceId = document.getElementById("adviceId");

httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    let advice = JSON.parse(httpRequest.response);
    text.textContent = '"' + advice.slip.advice + '"';
    adviceId.textContent = "ADVICE #" + advice.slip.id;
}
httpRequest.open("GET", "https://api.adviceslip.com/advice");
httpRequest.send();


button.addEventListener("click", () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
        let advice = JSON.parse(httpRequest.response);
        text.textContent = '"' + advice.slip.advice + '"';
        adviceId.textContent = "ADVICE #" + advice.slip.id;
    }
    httpRequest.open("GET", "https://api.adviceslip.com/advice");
    httpRequest.send();
})
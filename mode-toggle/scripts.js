const inputE1 = document.querySelector(".input");
const bodyE1 = document.querySelector("body");

inputE1.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
function updateBody() {
    if(inputE1.checked) {
        bodyE1.style.backgroundColor = "rgb(0, 0, 0)";
    } else {
        bodyE1.style.backgroundColor = "rgb(255, 255, 255)";
    }
}

inputE1.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputE1.checked));
}
const textareaE1 = document.getElementById("textarea");
const totalcountE1 = document.getElementById("total-counter");
const remainingcounterE1 = document.getElementById("remaining-counter");

textareaE1.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter();
function updateCounter() {
    totalcountE1.innerText = textareaE1.value.length
    remainingcounterE1.innerText = 250 - textareaE1.value.length;
}
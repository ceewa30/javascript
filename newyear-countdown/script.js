const d = new Date();
let year = d.getFullYear() + 1;
document.getElementById("year").innerHTML = year;

const dayE1 = document.getElementById("days")
const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondE1 = document.getElementById("seconds")

updateCoundown();

function updateCoundown() {
    const now = new Date().getTime();
    const countdownDate = new Date(`January 1, ${year} 00:00:00`).getTime();

    const gap = countdownDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);


    h = hours < 10? '0' + hours : hours;
    m = minutes < 10? '0' + minutes : minutes;
    s = seconds < 10? '0' + seconds : seconds;

    dayE1.innerHTML = days;
    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    setTimeout(updateCoundown, 1000);
}
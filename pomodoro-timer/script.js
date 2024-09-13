const startE1 = document.getElementById('start-btn');
const stopE1 = document.getElementById('stop-btn');
const resetE1 = document.getElementById('reset-btn');
const timeDisplayE1 = document.getElementById('timer-count');

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timeDisplayE1.innerHTML = formattedTime;
}
function starttimer () {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            alert('Time is up!');
            resettimer();
        }
    }, 1000);
}

function stoptimer () {
    clearInterval(interval);
}

function resettimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}



startE1.addEventListener('click', starttimer);
stopE1.addEventListener('click', stoptimer);
resetE1.addEventListener('click', resettimer);
const dobE1 = document.getElementById('dob');
const calculateBtnE1 = document.getElementById('calculate-btn');
const resultE1 = document.getElementById('result-container');


calculateBtnE1.addEventListener('click', () => {
    if (dobE1.value === '') {
        alert('Please enter your date of birth.');
        return;
    }
    const dob = new Date(dobE1.value);
    const currentDate = new Date();

    const ageDiffMs = currentDate - dob;
    // The magic number: 31557600000 is 24 * 3600 * 365.25 * 1000 Which is the length of a year
    const ageDiffYears = Math.floor(ageDiffMs / 31557600000);

    resultE1.innerHTML = `Your age is ${ageDiffYears} years.`;
});
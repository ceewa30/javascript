const loanAmountE1 = document.getElementById("loan-amount");

const interestRateE1 = document.getElementById("interest-rate");

const monthstopayE1 = document.getElementById("months-to-pay");

function calculateLoan() {
    const principal = parseFloat(loanAmountE1.value);
    const interestRate = parseFloat(interestRateE1.value) / 100;
    const monthsToPay = parseFloat(monthstopayE1.value);

    const monthlyPayment = principal * (interestRate / 12) / (1 - (1 + (interestRate / 12)) ** -monthsToPay);

    const totalInterest = monthlyPayment * monthsToPay - principal;

    document.querySelector(".monthly-payment").innerText = monthlyPayment.toFixed(2);
    document.querySelector(".total-interest").innerText = totalInterest.toFixed(2);
}
const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 =  document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
    // colorContainerE1.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // colorContainerE1.innerText = '#' + `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    colorContainerE1.style.backgroundColor = '#' + randomColor();
}

const colorContainerE1s = document.querySelectorAll('.color-container');

generateColors();
function generateColors() {
    colorContainerE1s.forEach(colorContainerE1 => {
        const newColor = randomColor();
        colorContainerE1.style.backgroundColor = '#' + newColor;
        colorContainerE1.innerText = "#" + newColor;
});
}


function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        colorCode += chars[Math.floor(Math.random() * chars.length)];
    }
    return colorCode;
}

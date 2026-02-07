const redInput = document.getElementById("redRange");
const greenInput = document.getElementById("greenRange");
const blueInput = document.getElementById("blueRange");
const colorText = document.getElementById("colorText");

function updateColor() {
    const r = redInput.value;
    const g = greenInput.value;
    const b = blueInput.value;

    const colorString = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = colorString;

    colorText.textContent = colorString;
}

redInput.addEventListener("input", updateColor);
greenInput.addEventListener("input", updateColor);
blueInput.addEventListener("input", updateColor);
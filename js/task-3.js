const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.style.border = "1px solid rgba(128, 128, 128, 1)";
inputName.style.borderRadius = "4px";
inputName.style.width = "360px";
inputName.style.height = "40px";
inputName.style.fontSize = "16px";
inputName.style.padding = "16px";

inputName.addEventListener('input', (event) => {
    const correctValue = inputName.value.trim();
    outputName.textContent =  correctValue ||'Anonymous';  
})
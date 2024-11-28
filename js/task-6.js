function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberOfElements = document.querySelector('#number-of-elements');
numberOfElements.style.width = "200px";
numberOfElements.style.height = "35px";
numberOfElements.style.border = "2px solid #4e75ff";
numberOfElements.style.borderRadius = "8px";
numberOfElements.style.padding = "5px 10px";
numberOfElements.style.fontSize = "16px";
numberOfElements.style.color = "#333";
numberOfElements.style.outline = "none";
numberOfElements.style.appearance = "none"; 
numberOfElements.style.webkitAppearance = "none"; 
numberOfElements.style.mozAppearance = "textfield";


const createElement = document.querySelector('.button-create');
createElement.style.width = "200px";
createElement.style.height = "35px";
createElement.style.border = "2px solid #4e75ff";
createElement.style.backgroundColor = "#4e75ff";
createElement.style.borderRadius = "8px";
createElement.style.padding = "5px 10px";
createElement.style.fontSize = "16px";
createElement.style.color = "rgba(246, 246, 254, 1)";
createElement.style.outline = "none";


const destroyElement = document.querySelector('.button-destroy');
destroyElement.style.width = "200px";
destroyElement.style.height = "35px";
destroyElement.style.border = "2px solid rgba(255, 78, 78, 1)";
destroyElement.style.backgroundColor = "rgba(255, 78, 78, 1)";
destroyElement.style.borderRadius = "8px";
destroyElement.style.padding = "5px 10px";
destroyElement.style.fontSize = "16px";
destroyElement.style.color = "rgba(246, 246, 254, 1)";
destroyElement.style.outline = "none";


const boxes = document.querySelector('#boxes');
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "10px";
boxes.style.justifyContent = "center";
boxes.style.padding = "10px";
boxes.style.maxWidth = "100%";
boxes.style.boxSizing = "order-box";



const createBoxes = (amount) => {
  amount = parseInt(numberOfElements.value);
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= amount; i++) {
      
      const newbox = document.createElement('div');
      newbox.style.display = "block";
      newbox.style.height = `${i * 10+20}px`;
      newbox.style.width = `${i * 10+20}px`;
      newbox.style.marginRight = "40px";
      newbox.style.backgroundColor = getRandomHexColor();

      fragment.appendChild(newbox);
      
    }
    boxes.appendChild(fragment);
    numberOfElements.value = '';
  } else {
    return;  
  }

}
  
const destroyBoxes = () => {
  boxes.innerHTML = '';
  numberOfElements.value = '';
}
createElement.addEventListener('click', createBoxes); 
destroyElement.addEventListener('click', destroyBoxes);


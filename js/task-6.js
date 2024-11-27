function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberOfElements = document.querySelector('#number-of-elements');
const createElement = document.querySelector('.button-create');
const destroyElement = document.querySelector('.button-destroy');
const boxes = document.querySelector('#boxes');
boxes.style.display = "flex";

const createBoxes = (amount) => {
  amount = parseInt(numberOfElements.value);
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = ''

    for (let i = 1; i <= amount; i++) {
      const newbox = document.createElement('div');
   
      newbox.style.height = `${i * 10+20}px`;
      newbox.style.width = `${i * 10+20}px`;
      newbox.style.marginRight = "40px";
      newbox.style.backgroundColor = getRandomHexColor();

      boxes.append(newbox);
      numberOfElements.value = '';
    }
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

//   console.log('jdfhgnvl')
//   console.log(numberOfElements.value)
//   const quantityOfElements = parseInt(numberOfElements.value);
//   console.log(quantityOfElements);
  
//   boxes.innerHTML = ''
  

//   if (isNaN(quantityOfElements) || quantityOfElements <= 0) {

//     return;
//   }
  
  // for (let i = 1; i<=quantityOfElements; i++) {
  //   const newbox = document.createElement('div');
   
  //   newbox.style.height = `${i * 10}px`;
  //   newbox.style.width = `${i * 10}px`;
  //   newbox.style.marginRight = "40px";
  //   newbox.style.backgroundColor = getRandomHexColor();

  //   boxes.append(newbox);
    


//   }
 


// })
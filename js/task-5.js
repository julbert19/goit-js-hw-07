function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const nameColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
button.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();

  nameColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;

})




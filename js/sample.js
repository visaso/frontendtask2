'use strict';
const firstElement = document.querySelector('#test');
firstElement.innerHTML = 'Use js';
firstElement.setAttribute('style', 'color: red');

firstElement.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  e.currentTarget.setAttribute('style', 'background: purple');
});


const exampleElements = document.querySelectorAll('.example');
console.log(exampleElements);

const changeColor = (e) => {
  console.log(e.currentTarget);
  e.currentTarget.setAttribute('style', 'background: yellow');
};

for (let i = 0; i < exampleElements.length; i++) {
  console.log(exampleElements[i]);
  exampleElements[i].addEventListener('click', changeColor);

}

for (const element of exampleElements) {
  element.innerHTML = 'Modified';
}
function generateRandomNumber(min_value , max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);;
};

function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};

function displayErrors(errors, errorsContainer) {
  removeErrors(errorsContainer);
  for (let error of errors) {
    addElement(error, 'li', errorsContainer);
  }
}

function removeErrors(errorsContainer) {
  for (let i = 0; i < errorsContainer.children.length; i) {
    errorsContainer.children[i].remove();
  }
}

function addElement(message = "", elementTag, elementContainer) {

  const newElement = document.createElement(elementTag);
  const text       = document.createTextNode(message);

  newElement.appendChild(text);

  elementContainer.appendChild(newElement);
}

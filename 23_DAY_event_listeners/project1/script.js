const container = document.querySelector('.container');
container.style.textAlign = 'center';
const h1Tag = document.querySelector('h1');
h1Tag.style.fontSize = '3.5rem';
h1Tag.style.fontWeight = '800';
h1Tag.style.marginBottom = '5px';

setInterval(() => {
    h1Tag.style.color = randomColorGenerator();
}, 1000);

function randomColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const inputDiv = document.querySelector('.generate-input');
inputDiv.style.width = '70%';
inputDiv.style.height = 'auto';
inputDiv.style.marginLeft = '12%';
inputDiv.style.display = 'flex';
inputDiv.style.flexWrap = 'wrap';
inputDiv.style.justifyContent = 'center';
inputDiv.style.alignItems = 'center';

//access input textarea which is presented in the generate-input class.
const inputText = inputDiv.children[0];
inputText.style.width = '70%';
inputText.style.height = '2rem';
inputText.style.fontSize = '1.2rem';
inputText.style.marginTop = '0';

//access button which is presented in the generate-input class.
const numberButton = inputDiv.children[1];
numberButton.style.width = '27%';
numberButton.style.height = '2rem';
numberButton.style.marginLeft = '10px';
numberButton.style.marginTop = '0';
numberButton.style.fontSize = '1.3rem';
const mainContainer = document.querySelector('.main-container');
// Create a div tag where we will be displaying the numbers.
const numberContainer = document.createElement('div');
numberContainer.className = 'number-container';
numberContainer.style.width = '70%';
numberContainer.style.height = 'auto';
numberContainer.style.display = 'flex';
numberContainer.style.flexWrap = 'wrap';
numberContainer.style.alignItems = 'center';
numberContainer.style.justifyContent = 'center';
numberContainer.style.marginLeft = '12%';
mainContainer.appendChild(numberContainer);

function checkPrimeNumber(item) {
    let counter = 0;
    for (let i = 1; i * i <= item; i++) {

        if (item % i == 0) {
            counter += 1;
            if (item % i != i) {
                counter += 1;
            }
        }
    }
    if (counter === 2) {
        return true;
    }
    return false;
}
//we will be added div before input text when error is encountered.
const errorMessage = document.createElement('div');
numberButton.addEventListener('click', () => {
    errorMessage.innerHTML = '';
    numberContainer.innerHTML = '';
    inputText.style.border = '';
    // Check if the input value is not a number
    // let inputValue = inputText.value;
    if (inputText.value.trim() === '') {
        displayErrorMessage('Enter number value on the input field to generate numbers.');
        inputText.style.border = '2px solid red';
    } else if (isNaN(inputText.value)) {
        // Display an error message
        displayErrorMessage('Input value must be a number.');
        inputText.style.border = '2px solid red'; // Optionally, apply styling to indicate the error
    } else {
        // If the input value is a number, remove the error message and reset any error indication
        removeErrorMessage();
        // Optionally, reset border

        let loopCounter = inputText.value;
        console.log(typeof loopCounter);

        for (let i = 0; i <= loopCounter; i++) {
            const numberSpan = document.createElement('span');
            numberSpan.innerHTML = i;
            numberSpan.style.fontSize = '2rem';
            numberSpan.style.margin = '5px';
            numberSpan.style.width = '100px';
            numberSpan.style.height = '50px';
            numberSpan.style.display = 'flex';
            numberSpan.style.alignItems = 'center';
            numberSpan.style.justifyContent = 'center';
            if (checkPrimeNumber(i)) {
                numberSpan.style.backgroundColor = 'red';
            } else if (i % 2 === 0) {
                numberSpan.style.backgroundColor = 'yellow';
            } else {
                numberSpan.style.backgroundColor = 'green';
            }
            numberContainer.appendChild(numberSpan);
        }

    }
});
// numberButton.addEventListener('click', () => {
//     numberContainer.innerHTML = '';
//     let loopCounter = inputText.value;
//     console.log(typeof loopCounter);

//     for (let i = 0; i <= loopCounter; i++) {
//         const numberSpan = document.createElement('span');
//         numberSpan.innerHTML = i;
//         numberSpan.style.fontSize = '2rem';
//         numberSpan.style.margin = '5px';
//         numberSpan.style.width = '100px';
//         numberSpan.style.height = '50px';
//         numberSpan.style.display = 'flex';
//         numberSpan.style.alignItems = 'center';
//         numberSpan.style.justifyContent = 'center';
//         if (checkPrimeNumber(i)) {
//             numberSpan.style.backgroundColor = 'red';
//         } else if (i % 2 === 0) {
//             numberSpan.style.backgroundColor = 'yellow';
//         } else {
//             numberSpan.style.backgroundColor = 'green';
//         }
//         numberContainer.appendChild(numberSpan);
//     }

// });

function displayErrorMessage(message) {
    // Create a new element for the error message

    errorMessage.className = 'error-message';
    errorMessage.style.width = '100%';
    errorMessage.style.height = 'auto';
    errorMessage.style.color = 'red';
    errorMessage.style.margin = '0';
    errorMessage.style.padding = '0';
    errorMessage.style.display = 'flex';
    // errorMessage.style.border = '2px solid blue';
    errorMessage.textContent = message;

    // Insert the error message above the input tag
    inputDiv.insertBefore(errorMessage, inputText);
}

function removeErrorMessage() {
    // Remove any existing error message
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
        console.log('remove error message');
    }
}
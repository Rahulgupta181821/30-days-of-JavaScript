import countries from '../../../data/countries.js';
//access the countries div and then access the 2nd div where I want to add countries list.
const div = document.querySelector('.container');
const maindiv = div.childNodes[3];
maindiv.classList = 'main-container';
const h2 = document.querySelector('.nav-container h2');
const span = h2.childNodes[1];
span.innerHTML = `${countries.length}`
console.dir(span);
//Creating span tag and adding countries name and added to the main-container.
for (let i = 0; i < countries.length; i++) {
    const box = document.createElement('span');
    box.classList = 'box';
    box.innerHTML = `${countries[i].toUpperCase()}`;
    setInterval(() => {
        box.style.color = `${randomColorsGenerator()}`
    }, 2000)
    maindiv.appendChild(box);
}
//creating random colors generators function 
const randomColorsGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//accessing the h1 tag in main-container
const h1 = document.querySelector('.nav-container h1');
console.dir(h1);
setInterval(function() {
    h1.style.color = `${randomColorsGenerator()}`
}, 1000)
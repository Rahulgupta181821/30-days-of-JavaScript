const h1 = document.querySelector('h1');
h1.style.width = '40%';
h1.style.height = '40px';
// h1.style.border = '2px solid black';
h1.style.display = 'flex';
h1.style.alignItems = 'center';
h1.style.justifyContent = 'center';
h1.style.fontSize = '3rem';
h1.style.padding = '10px';
h1.style.boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.7)';
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.flexDirection = 'column';
container.style.width = '100%';
container.style.height = '400px';

container.style.textAlign = 'center';
const newDiv = document.createElement('div');
newDiv.style.width = '150px';
newDiv.style.height = '150px';
newDiv.style.fontSize = '4rem';
newDiv.style.boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.7)';
newDiv.style.fontWeight = '900';
newDiv.style.display = 'flex';
newDiv.style.justifyContent = 'center';
newDiv.style.alignItems = 'center';
// newDiv.style.border = '2px solid black';

document.body.addEventListener('keydown', e => {
    newDiv.innerHTML = '';
    let keys = e.key;
    const span = document.createElement('span');
    span.style.color = 'green';
    span.style.marginLeft = '10px';
    span.innerHTML = keys;
    h1.innerHTML = `You pressed `;
    // h1.style.color = 'red';
    h1.appendChild(span);
    newDiv.innerHTML = e.keyCode;
    newDiv.style.color = 'green';
    console.dir(e);
    container.appendChild(newDiv);
});
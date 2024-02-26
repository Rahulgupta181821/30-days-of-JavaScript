let wrapper = document.querySelector('.wrapper');
wrapper.style.textAlign = 'center';
let titleYear = document.querySelector('h1');
let spanElement = titleYear.querySelectorAll('span')[0];
let date = new Date();
let year = date.getFullYear();
spanElement.innerHTML = `${year}`;
spanElement.style.fontSize = '4rem'
const randomColorGenerator = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}
setInterval(function() {
    spanElement.style.color = randomColorGenerator();
}, 1000)


let h2tag = document.querySelector('.wrapper h2');
h2tag.style.color = 'rgb(186 158 232)';
h2tag.style.fontWeight = '500';
// h2tag[0].id = 'second-heading';
let h3tag = document.createElement('span');

function dateAndTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let monthsInEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let monthsEngl = monthsInEnglish[month];
    return `${monthsEngl} ${day} ${year} ${hour}:${min}:${sec}`;

}
// console.log(dateAndTime());
h3tag.innerHTML = dateAndTime();
h2tag.insertAdjacentElement('afterend', h3tag);
setInterval(function() {
    h3tag.style.backgroundColor = randomColorGenerator();
}, 1000)
console.log(h3tag);
h3tag.style.padding = '0.5rem 1.5rem'
let ultag1 = document.querySelector('.wrapper ul');
ultag1.style.listStyleType = 'none';
ultag1.style.marginLeft = '23%';
let ultag = document.querySelectorAll('.wrapper ul li');
ultag.forEach((item, i) => {
        const array = item.innerHTML.split(' ');
        item.style.width = '70%';
        item.style.height = '40px';
        item.style.margin = '3px';
        item.style.padding = '3px';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        if (array.includes('Done')) {
            item.style.backgroundColor = 'green';
        } else if (array.includes('Ongoing')) {
            item.style.backgroundColor = 'yellow';
        } else if (array.includes('Coming')) {
            item.style.backgroundColor = 'red';
        }

    })
    // console.log(ultag);
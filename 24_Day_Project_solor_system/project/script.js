const space = {
    mercury: {
        gravity: 3.7,
        image: "mercury.png"
    },
    venus: {
        gravity: 8.87,
        image: "venus.png"
    },
    earth: {
        gravity: 9.81,
        image: "earth.png"
    },
    mars: {
        gravity: 3.71,
        image: "mars.png"
    },
    jupiter: {
        gravity: 24.79,
        image: "jupiter.png"
    },
    saturn: {
        gravity: 10.44,
        image: "saturn.png"
    },
    uranus: {
        gravity: 8.69,
        image: "uranus.png"
    },
    neptune: {
        gravity: 11.15,
        image: "neptune.png"
    }
    // pluto: {
    //     gravity: 1.12,
    //     image: "neptune.png"
    // }
}

const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button")
    // const container = document.querySelector(".container");
let weight;


const container = document.createElement('div');

container.className = 'container';



button.addEventListener('click', (e) => {
    document.body.appendChild(container);
    container.innerHTML = '';
    if (input.value.trim() === '' || isNaN(input.value)) {
        const p = document.createElement('p');
        p.textContent = 'Mass is required';
        p.style.width = '70%';
        p.style.height = '80%';
        p.style.padding = '10px';
        p.style.fontSize = '2rem';
        p.style.color = '#fff';
        p.style.backgroundColor = 'rgb(128, 128, 128, 0.3)';

        container.appendChild(p);
    } else {
        let imgSrc;
        container.innerHTML = '';
        imgSrc = space[select.value].image;
        let weight = Number(input.value) * space[select.value].gravity;
        console.log(weight);
        showOutPut(imgSrc, weight);
    }


});
const showOutPut = (imgSrc, weight) => {
    const img = document.createElement('img');
    img.src = `./images/${imgSrc}`;
    container.appendChild(img);
    img.className = 'img-container';
    const outPutDiv = document.createElement('div');
    outPutDiv.className = 'outPut';
    const h2Output = document.createElement('h2');
    h2Output.textContent = `The weight of the object on  ${select.value.toUpperCase()}`;
    outPutDiv.appendChild(h2Output);
    const showOutPutPara = document.createElement('p');
    showOutPutPara.className = 'out-put';
    showOutPutPara.innerHTML = `${weight.toFixed(2)} N`;
    outPutDiv.appendChild(showOutPutPara);
    container.appendChild(outPutDiv);
    console.log(outPutDiv.innerHTML);
}
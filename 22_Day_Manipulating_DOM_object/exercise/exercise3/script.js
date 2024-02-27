const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
const container2 = document.createElement('div');
container.appendChild(container2);
container2.className = 'heading-container';
const container3 = document.createElement('div');
container.appendChild(container3);
container3.className = 'main-container';
container.style.textAlign = 'center';

//adding text to the heading container.
container2.innerHTML = `<h1>Asabeneh Yetayeh challenges in <span></span></h1>
<h3>30DaysOfJavaScript</h3>
<h3>Date</h3>
`
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const min = date.getMinutes();
const second = date.getSeconds();
const montsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const span = container2.childNodes[0].childNodes[1];
span.innerHTML = `${year}`
span.style.fontSize = '4rem';

const randomColorsGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const h3ForData = container2.childNodes[4];
h3ForData.innerHTML = `${montsArray[month]} ${day}, ${year}`
setInterval(() => {
    h3ForData.style.backgroundColor = `${randomColorsGenerator()}`
}, 1000);
h3ForData.style.display = 'inline-block'
h3ForData.style.padding = '0 20px';
h3ForData.style.marginTop = '2px';
setInterval(() => {
    span.style.color = `${randomColorsGenerator()}`
}, 1000);
const challenges = ['30 Days Of Python', '30 Days Of JavaScript', '30 Days Of HTML & CSS', '30 Days Of React', '30 Days Of ReactNative', '30 Days Of Fullstack', '30 Days Of Data Analysis', '30 Days Of Machine Learning'];
const challengesOutcomes = ['Done', 'Ongoing', 'Coming', 'Coming', 'Coming', 'Coming', 'Coming', 'Coming', 'Coming'];
console.log(challengesOutcomes.length);

const obj = {
    "Python": `<details><summary>   Python  </summary> <ul style="list-style-type:none;" >
    <li>Python</li> <li>Flusk</li> <li>Numpy</li> <li>Pandas</li> <li>Statatistics</li> <li>Api</li> <li>MongoDB</li> </ul> </details> `,

    "JavaScript": `<details><summary >JavaScript</summary> 
    <ul style="list-style-type:none;">
    <li>JavaScript</li> <li>ES6</li> <li>Promises</li> <li>async and await</li> <li>DOM</li> </ul> </details> `,
    "HTML & CSS": `<details>
    <summary>HTML & CSS</summary>
    <ul style="list-style-type:none;">
    <li>HTML</li>
    <li>CSS</li>
    <li>Grid</li>
    <li>Flex</li>
    </ul>
    </details> `,
    "React": `<details> <summary>React</summary> <ul style="list-style-type:none;">
    <li>React</li> <li>React ES6</li> <li>React events</li> <li>React Hooks</li> <li>React JSX</li> </ul> </details> `,
    "ReactNative": `<details> <summary >ReactNative</summary> <ul style="list-style-type:none;">
    <li >Python</li> <li>Flusk</li> <li>Numpy</li> <li >Pandas</li> <li>Statatistics</li> <li>Api</li> <li>MongoDB</li> 
    </ul> 
    </details> `,
    "FullStack": `<details> 
    <summary>FullStack</summary>
    <ul style="list-style-type:none;">
    <li>Python </li>
     <li>Flusk </li>
      <li>Numpy </li> 
      <li>Pandas </li> 
      <li>Statatistics </li> 
      <li>Api </li> 
      <li>MongoDB </li> 
      </ul> 
      </details> `,
    "Data Analysis": `<details>
    <summary>Data Analysis</summary>
    <ul style="list-style-type:none;">
    <li>Python</li>
    <li>Flusk</li>
    <li>Numpy</li>
    <li>Pandas</li>
    <li>Statatistics</li>
    <li>Api</li>
    <li>MongoDB</li>
    </ul>
    </details> `,
    "MachineLearning": `<details>
    <summary>Machine Learning</summary>
    <ul style="list-style-type:none;">
    <li>Python</li>
    <li>Flusk</li>
    </ul> 
    </details>`
}
let i = 0;
for (let key of Object.keys(obj)) {
    const p = document.createElement('p');
    p.innerHTML = `<span>${challenges[i]}</span>
       <span> ${obj[key]}</span>
        <span>${challengesOutcomes[i]}</span>
        `;


    p.style.display = 'flex';
    p.style.flexWrap = 'wrap';
    p.style.justifyContent = 'space-between';
    p.style.width = '60%';
    p.style.height = '20%'
    if (challengesOutcomes[i] === 'Done') {
        p.style.backgroundColor = 'green';
    } else if (challengesOutcomes[i] === 'Ongoing') {
        p.style.backgroundColor = 'yellow';

    } else {
        p.style.backgroundColor = 'red';
    }

    p.style.margin = '5px'
    p.style.padding = '20px'
    container3.appendChild(p);
    i++;
}
// container3.style.display = 'flex';
container3.style.width = '100%';
container3.style.marginLeft = '20%';
//footer part
// creating a div and adding to the container class.
const container4 = document.createElement('div');
container.appendChild(container4);
container4.className = 'footer-container';

//creating a div and adding to the footer-container div class.
const footerDiv = document.createElement('div');
container4.appendChild(footerDiv);
footerDiv.innerHTML = `
<h2>Asabeneh Yetayeh</h2>
<p><span><i class="fa-brands fa-linkedin"></i></span><span><i class="fa-brands fa-twitter"></i></span><span><i class="fa-brands fa-square-github"></i></span></p>
`;
// console.dir(footerDiv);
footerDiv.children[0].style.marginBottom = '0';
footerDiv.children[0].style.fontSize = '2rem';
//footer paragraph
const footerP = footerDiv.children[1];
footerP.style.fontSize = '1.5rem';
footerP.style.margin = '0';
const footerAboutDiv = document.createElement('div');
container4.appendChild(footerAboutDiv);
footerAboutDiv.innerHTML = `<p>I am a educator, motivator and content creator. I am a life-long learner. if you like to know more about my Linkedin or Github profile. Thanks you so much for joining in my quest of changing everyone to developer.</p> `;
footerAboutDiv.style.width = '70%';
footerAboutDiv.style.marginLeft = '18%';
const footerSkillDiv = document.createElement('div');
container4.appendChild(footerSkillDiv);

const objectSkill = {
    "Titles": `
    <ul>
    <p>Titles</p>
            <a href="">Educator</a>
            <a href="">Programmer</a>
            <a href="">Developer</a>
            <a href="">motivator</a>
            <a href="">Content Creator</a>
    </ul>
    `,
    "Skills": `
    <ul>
    <p>Skills</p>
                <a href="">Web Development</a>
                <a href="">Data Analysis</a>
                <a href="">Data Visualization</a>
                <a href="">Programming</a>
                <a href="">Databases</a>
                <a href="">Developing API</a>
    </ul>`,
    "Qualifications": `
    <ul>
    <p>Qualifications</p>
                <a href="">MSc. Computer Science Ongoing</a>
                <a href="">BSc. Information and Communication Eng.</a>
                <a href="">MSc. Food Technology</a>
                <a href="">BSc. Food Technology</a>
                
    </ul>`

}
let text = '';
for (let item of Object.keys(objectSkill)) {
    text += objectSkill[item];
}

footerSkillDiv.innerHTML = text;
footerSkillDiv.style.display = 'flex';
footerSkillDiv.style.width = '70%';
footerSkillDiv.style.marginLeft = '15%';
footerSkillDiv.style.justifyContent = 'space-between';
// console.dir(footerSkillDiv);
for (let i = 0; i < footerSkillDiv.children.length; i++) {
    // console.dir(footerSkillDiv.children[i]);
    let ul = footerSkillDiv.children[i];
    ul.className = 'footer-skill';
    ul.style.fontSize = '1.5rem';
    ul.style.fontWeight = '600';
    // ul.style.color = "red";
}
const a = document.querySelectorAll(".footer-skill a");

console.dir(a);
for (let i = 0; i < a.length; i++) {
    a[i].style.display = 'flex';
    a[i].style.fontSize = "1rem";
    a[i].style.textDecoration = "none";
    a[i].style.paddingLeft = "20px";
}
const keywordsDiv = document.createElement("div");
keywordsDiv.style.width = '70%';
keywordsDiv.style.height = 'auto';
keywordsDiv.style.display = 'flex';
keywordsDiv.style.flexWrap = 'wrap';
keywordsDiv.style.marginLeft = '22%';

let keyWords = ['HTML', 'HTML5', 'CSS', 'CSS3', 'JS', 'JavaScript', 'ES6', 'Promise', 'async await', 'Database', 'React', 'React Hooks', 'Context API', 'React Router', 'Redux', 'Node', 'MongoDB', 'SQL', 'API', 'DOM', 'data science', 'MERN', 'Python', 'Flask', 'Statistics', 'Linear Algebra', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Visualization', 'D3js'];
container4.appendChild(keywordsDiv);
const h3KeywordsHeading = document.createElement('h3');
h3KeywordsHeading.innerHTML = 'Keywords';
keywordsDiv.appendChild(h3KeywordsHeading);

for (let i = 0; i < keyWords.length; i++) {
    const keywod = document.createElement('span');
    keywod.innerHTML = `#  ${keyWords[i]}`;
    keywod.innerHTML = keywod.innerHTML.italics();

    keywod.style.backgroundColor = `
    ${ randomColorsGenerator() }
    `;
    keywod.style.padding = '8px 20px';
    keywod.style.margin = '5px';
    keywod.style.fontSize = '1rem';
    keywod.style.fontWeight = '600';
    keywod.style.borderRadius = '50px';

    keywordsDiv.appendChild(keywod);
}
h3KeywordsHeading.style.width = '100%';
h3KeywordsHeading.style.display = 'flex';
h3KeywordsHeading.style.fontSize = '1.5rem';
h3KeywordsHeading.style.marginBottom = '2px';
h3KeywordsHeading.style.marginLeft = '-35px';
h3KeywordsHeading.style.marginTop = '-2px';
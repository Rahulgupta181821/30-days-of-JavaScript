//Level 2
import countries from './countries.js';
import webTechs from './web_techs.js';
console.log(webTechs);
console.log(countries);
console.log("heoll wrordjklfk");

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
console.log(text.length)
let word = text.replace(/%|&|@|#|;|,|\.|!|\$/g,'');
// word = word.replace('.','')
word = word.split(' ')
console.log(word);
console.log(word.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
let index= shoppingCart.indexOf('Honey');
shoppingCart.splice(index,1);
index = shoppingCart.indexOf('Tea');
shoppingCart[index]='Green Tea';
console.log(shoppingCart);



if (countries.indexOf('Ethiopia')!=-1){
    console.log('Ethiopia'.toUpperCase());
}
else{
    countries.push('Ethiopia');
}

if (webTechs.indexOf('Sass')!=-1){
    console.log('Sass is a CSS');
}
else{
    webTechs.push('Sass');
    console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 28];
ages.sort();
console.log(ages)
let median = ages.length;
if (median%2 ===0){
   console.log("Even Length:",ages.slice(parseInt(median/2-1),parseInt(median/2+1)));

}else{
    console.log("odd length:",ages[parseInt(median/2)]);
}

let averageAge=0;
for(let i=0; i<ages.length; i++){
    averageAge += ages[i];
}

averageAge = averageAge/ages.length;

console.log("Avera Age:",averageAge);

let maxAge= ages[ages.length-1];
let minAge= ages[0];

console.log("Max Age:",maxAge);
console.log("Min Age:",minAge);
console.log(Math.abs(minAge-averageAge));
console.log(Math.abs(maxAge-averageAge));

console.log(countries.slice(0,10));
console.log(countries[parseInt(countries.length/2)]);

if(countries.length%2===0){
console.log(countries.slice(0,parseInt(countries.length/2)));
console.log(countries.slice(parseInt(countries.length/2)));
}else{
console.log(countries.slice(0,parseInt(countries.length/2)));
console.log(countries.slice(parseInt(countries.length/2)));
}


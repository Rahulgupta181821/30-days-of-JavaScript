import countries_data from '../../data/countries_data.js';
console.log(countries_data);
// console.table(countries_data)
console.assert(10 > 2 * 10);

console.time('while loop')
let i = 0;
while (i < 100000) {
    i++;
}
console.log(i);
console.timeEnd('while loop');
console.time('for loop');
let k = 0;
let arr = [];
for (let i = 0; i < 100000; i++) {
    k++;
    arr.push(i)
}
console.log(k);
console.timeEnd('for loop');
console.log('for of loop');
let l = 0;
for (let i of arr) {
    l++;
}
console.log(l);
console.timeEnd('for of loop');
console.log('forEach loop')
k = 0;
arr.forEach(item => k++);
console.log(k);
console.timeEnd('for loop');
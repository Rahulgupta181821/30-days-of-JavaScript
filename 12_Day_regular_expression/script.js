// const str = 'I love JavaScript and love web depelopment.'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)
// let flag = 'gi'
// let regExp = new RegExp(pattern, flag)
// let regExp1 = /love/gi;

const str = 'I love JavaScript.';
// const pattern = new RegExp('love')
const pattern1 = /love/;
// const result = pattern.test(str);
const result = str.match(pattern1);
// console.log(result);

// const pattern = /\\b\w{4}\b/g // d is a special character which means digits
// const txt = 'This regular an expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches) // ["12", "2020"], this is not what we want


const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b\w{4}\b/g //  exactly four character words
const matches = txt.match(pattern)
console.log(matches) //['This', 'made', '2019']

import countries from '../../data/countries.js';
// It goes two level up in the given directory
// import countries from './countries.js';

// console.log(countries);

// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// for(let i=10; i>=0;i--){
//   console.log(i);
// }
// let i=10;

// while(i>=0){
//   console.log(i);
//   i--;
// }
// i=10;
// do{
//     console.log(i);
//     i--;
// }while(i>=0);

// for(let i=0;i<7;i++){
//     let line='';
//     for(let j=0;j<=i;j++){
//            line+='#';
//     }
//     console.log(line);
    
// }
// for(let i=0;i<=10;i++){
//     console.log(`${i} x ${i} = ${i*i} `);
// }
// console.log("i i^2  i^3");

// for(let i=0;i<=10;i++){
//     console.log(`${i}   ${i*i}  ${i*i*i}`);
// }

// for(let i=0;i<=100;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// for(let i=0;i<=100;i++){
//     if (i%2!==0){
//         console.log(i);
//     }
// }

// for(let i=1;i<100;i++){
//    let counter=0;
//    for(let j=1;j<=Math.sqrt(i);j++){
//     if(i%j===0){
//         counter++;
//         if(parseInt(i/j)!=j){
//             counter++;
//         }
//     }
    
//    }
//    if(counter==2){
//        console.log(i);
//    }    

// }
// let sum=0

// for(let i=0; i<=100; i++){
//       sum+=i;
// }

// console.log(sum);


// let sum=0

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//       sum+=i;
//     }
// }

// console.log(sum);


// let sumOdd=0
// let sumEven=0

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//       sumEven+=i;
//     }else{
//         sumOdd+=i;
//     }
// }

// console.log([sumEven,sumOdd]);
// let arr= Array()
// for (let i=0; i<5; i++){
//     arr.push(parseInt(Math.random()*10))
// }
// console.log(arr);


// let arr= Array()
// while(arr.length<5){
//     let counter=parseInt(Math.random())
//     if (!arr.includes(counter)){
//          arr.push(counter)
//     }
// }
// console.log(arr);


// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let randomID = '';


// let arr= Array()
// while(randomID.length<5){
//     let counter=parseInt(Math.random()*characters.length)
//     randomID += characters.charAt(counter)
// }
// console.log(randomID);

// Level 2

// Write a script which generates a random hexadecimal number.
// const characters = '0123456789ABCDEF';
// let randomID = '#';


// let arr= Array()
// while(randomID.length < 6) {
//     let counter=parseInt(Math.random()*characters.length)
//     randomID += characters.charAt(counter).toLowerCase()
// }

// console.log(randomID);

// Write a script which generates a random rgb color number.
// let arr= Array()
// while(arr.length < 3) {
//     let counter=parseInt(Math.random()*256)
//     arr.push(counter);
    
// }

// console.log(`rgb(${arr[0]},${arr[1]},${arr[2]})`);

// Using the above countries array, create the following new array.
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   for (let i = 0; i <countries.length;i++){
//     countries[i]= countries[i].toUpperCase();
//   }
//   console.log(countries);

//   Using the above countries array, create an array for countries length'.
// let countryLengths=Array();

// for (let i = 0; i <countries.length;i++){
//     countryLengths.push(countries[i].length);
//   }
//   console.log(countryLengths);

//   Use the countries array to create the following array of arrays:

// let arrArray= Array();

// for (let i = 0; i <countries.length;i++){
//     arrArray.push([countries[i],countries[i].slice(0,3).toUpperCase() ,countryLengths[i]]);
//   }
//   console.log(arrArray);

//   In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let arr=Array();
// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes('land')){
//         arr.push(countries[i]);
//     }
// }
// if(arr.length!=0){
//     console.log(arr);
// }else{
//     console.log('All these countries are without land');
// }

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// let arr=Array();
// for(let i=0; i<countries.length; i++){
//     if(countries[i].endsWith('ia')){
//         arr.push(countries[i]);
//     }
// }
// if(arr.length!=0){
//     console.log(arr);
// }else{
//     console.log('these are countries are without ia.');
// }

// Using the above countries array, find the country containing the biggest number of characters.
// let counter=-1;
// let lenghtCount =0;
// for(let i=0; i<countries.length; i++){
//     if(countries[i].length > lenghtCount){
//         counter=i;
//         lenghtCount=countries[i].length;
//     }
// }

// console.log(countries[counter]);

// Using the above countries array, find the country containing only 5 characters.

// let arr=Array();
// for(let i=0; i<countries.length; i++){
//     if(countries[i].length==5){
//         arr.push(countries[i]);
//     }
// }
// console.log(arr);


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//   let counter=0;
//   let index=-1;
//   for(let i=0; i<webTechs.length; i++){
//        if(webTechs[i].length > counter){
//         counter=webTechs[i].length;
//         index=i;    
//        }
//   }
//   console.log(webTechs[index]);

//   let arr=Array();
//   for(let i=0; i<webTechs.length; i++){
//     arr.push([webTechs[i].toUpperCase(),webTechs[i].length]);
// }
// console.log(arr);

// for(let item of webTechs){
//     console.log(item);
// }

// let left=0;
// let right=webTechs.length-1;
// while(left<right){
//     let temp = webTechs[left];
//     webTechs[left]=webTechs[right];
//     webTechs[right]=temp;
//     left++;
//     right--;
// }
// console.log("hello",webTechs);


// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// for(let i=0;i<fullStack.length;i++){
//     for(let j=0;j<fullStack[i].length;j++){
//         console.log(fullStack[i][j]);
//     }
// }





const countries1 = [
    ['Albania',"nepal",'bhutan'],
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

// let copyArray= [...countries1];
// copyArray[0][1]='India';
// console.log(copyArray);
// console.log(countries1);

// copyArray = countries1.slice();
// console.log(copyArray);
// console.log(countries1);

// copyArray = [].concat(countries1);
// console.log(copyArray);
// console.log(countries1);

// All technice does shallow copy.
// copyArray.sort();
// console.log(copyArray);

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// mernStack.sort();
// webTechs.sort();

// console.log(mernStack);

// console.log(webTechs);

// Extract all the countries contain the word 'land' from the countries array and print it as array
// let arr= [];
// for(let item of countries){
//     if(item.includes('land')){
//         arr.push(item);
//     }
// }
// console.log(arr);

// Find the country containing the hightest number of characters in the countries array
// let counter=0;
// let index=-1;
// for(let i=0; i<countries.length; i++){
//     if(countries[i].length > counter){
//         counter=countries[i].length;
//         index=i;    
//     }
// }
// console.log(counter);

// let arr=[];
// for(let item of countries){
//     if (item.length==4){
//         arr.push(item);
//     }
// }

// console.log(arr);


let arr=[];
for(let item of countries){
    if (item.includes(' ')){
        arr.push(item);
    }
}

console.log(arr);
let reverse = countries.reverse()
let array = [];
for(let item of reverse){
    array.push(item.toUpperCase());
}
console.log(array)
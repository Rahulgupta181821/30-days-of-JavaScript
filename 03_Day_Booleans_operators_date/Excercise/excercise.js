//Level

let firstName="Rahul";
let lastName="Gupta";
let country="India";
let city="Delhi";
let age=20;
let isMarried=false;
let year=2024;
console.log(typeof firstName);

console.log(typeof lastName);

console.log(typeof country);

console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10');
console.log(typeof '10' ==  typeof 10);
let variable=parseInt('9.8');
console.log(variable);
console.log(variable == 10);

console.log(1? "truthy" : "falsy");
console.log(3.5 ? "truthy" : "falsy");
console.log("Rahul"? "truthy" : "falsy");

console.log(0? "truthy" : "falsy");
console.log('' ? "truthy" : "falsy");
console.log(NaN ? "truth" : "falsy");

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4); 
console.log(4!=4);
console.log(4!==4);
console.log( `##### ${4!='4'}`);
console.log(4=='4');
console.log(4==='4');

console.log('python'.length);
console.log('jargon'.length);
console.log('python'==='jargon');

console.log(4>3 && 10<12);
console.log(4>3 && 10>12);
console.log(4>3 || 10<12);
console.log(4>3 || 10>12);
console.log(!(4>3));
console.log(!(4<3));
console.log(!(false));
console.log(!(4>3 && 10<13));
console.log(!(4>3 && 10>13));
console.log(!(4==='4'));

console.log(!('python'.search('on') && 'dragon'.search('on')));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(typeof (now.getMonth()+1));

console.log(now.getDate());
console.log(typeof (now.getDate()));

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// let base  = prompt("Please enter the base of the triangle");
// let height= prompt("Please enter the height of the triangle");
// console.log(typeof base);
// let area = (base*height)/2;
// console.log(area);
// console.log(typeof area)

// let a = prompt("Please enter the side a of  triange");
// let b = prompt("Please enter the side b of  triange");
// let c = prompt("Please enter the side c of  triange");
// let perimeter= +a + +b + +c;
// console.log(perimeter);

// let length=prompt("Please enter the length of rectangle");
// let width = prompt("Please enter the width of the rectangle");
// let areaofrectangle= length*width
// let perimeter= 2*(+length + +width);
// console.log(areaofrectangle);
// console.log(perimeter);


// let radius = prompt("Please enter the radius of circle:");
// let areaofcircle= Math.round(Math.PI*radius**2);
// let circumference = Math.round(Math.PI*2*radius);
// console.log(areaofcircle);
// console.log(circumference);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slope=2
const yIntercept=-2
const xIntercept = -(yIntercept/slope);
console.log("xIntercept:"+ xIntercept);
console.log("yIntercept:"+ yIntercept);
console.log("slope:"+ slope);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1=2
let x2=6
let y1=2
let y2=10

let m = (y2-y1)/(x2-x1);
console.log("m:"+ m);
console.log(m===slope);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let a=1;
let b=6;
let c=9;

const discriminant = b**2 -4*a*c;
if (discriminant < 0) {
    console.log("No real roots");
}else{
    const root1= (-b + Math.sqrt(discriminant)/(2*a));
    const root2= (-b - Math.sqrt(discriminant)/(2*a));
    console.log(root1);
    console.log(root2);
}
/*

Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
// const hours=prompt("Enter the hours");
// const rate=prompt("Enter the rate per hour");
// const pay = hours*rate;
// console.log(pay);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
// const Name=prompt("Enter your name");

// if(Name.length>7){
//     console.log("Your name is long");
// }else{
//     console.log("Your name is short");
// }

/*
Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh
*/

const FirstName = 'Asabeneh'
const LastName = 'Yetayeh'

console.log(`Your first name, ${FirstName} is longer than your family name, ${LastName}`);

/*
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

I am 225 years older than you.
*/

const myAge=250;
const yourAge=25;
console.log(`I am ${myAge-yourAge} years older than you.`);


/*
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

*/
// const birthYear = prompt('Enter birth year');
// const now3= new Date();
// const years = now3.getFullYear()- birthYear
// if( years >=18){
//     console.log(`You are ${years}. You are old enough to drive`);
// }else{
//     console.log(`You are ${years}. You will be allowed to drive after ${18-year} years.`);
// }

/*
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/
// const year1=prompt('Enter number of years you live');
// const seconds = year1*365*24*60*60;
// console.log(`You lived ${seconds} seconds.`);

const dat = new Date();
console.log(`${dat.getFullYear()}-${dat.getMonth()}-${dat.getDate()} ${dat.getHours()}:${dat.getMinutes()}`);
console.log(`${dat.getDate()}-${dat.getMonth()}-${dat.getFullYear()} ${dat.getHours()}:${dat.getMinutes()}`);
console.log(`${dat.getDate()}/${dat.getMonth()}/${dat.getFullYear()} ${dat.getHours()}:${dat.getMinutes()}`);

//level 3
let dd=''+dat.getDate();
dd= dd.length >1?dd:'0'+dd;
console.log(dd);

let mm=''+(dat.getMonth()+1);
mm= mm.length >1?mm:'0'+mm;
console.log(mm);

let hh=''+(dat.getHours());
hh= hh.length >1?hh:'0'+hh;
console.log(hh);

let min=''+(dat.getMinutes());
min= min.length >1?min:'0'+min;
console.log(min);

console.log(`${dat.getFullYear()}-${mm}-${dd} ${hh}:${min}`);
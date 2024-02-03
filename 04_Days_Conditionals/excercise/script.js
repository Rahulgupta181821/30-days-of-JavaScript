//Level 1
// let age = prompt("Enter your age.");
// if (age >= 18){
//     console.log("You are old enough to drive");

// }else{
//     console.log(`You are left with ${18-age} years to drive`);
// }





// let yourAge = prompt("Please enter your age");
// let myAge= 25;

// if (yourAge > myAge){
//     console.log(`You are ${yourAge-myAge} years older then me.`);
// }else if (yourAge < myAge){
//     console.log(`You are ${myAge-yourAge} years younger then me.`);
// }else{
//     console.log("You are the same age as me.");
// }

let a=4;
let b=3;
if (a>b){
    console.log(`${a} is greater than ${b}`);
}else if (a<b){
    console.log(`${b} is greater than ${a}`);
}else{
    console.log(`Both ${a} and ${b} are equal`);
}

let result=(a>b)?console.log(`${a} is greater than ${b}`): console.log(`${b} is greater than ${a}`);
console.log(result);







// let number= prompt("Enter a number");
// if (number%2==0){
//     console.log(`${number} is an even number`);
// }else{
//     console.log(`${number} is an odd number`);
// }

//Level 2

// let score= parseInt(prompt("Enter the your score:"));
// switch(true){
//     case score>=80 && score<=100:
//         console.log('A');
//         break;
//     case score>=70 && score<=79:
//         console.log('B');
//         break;
//     case score>=60 && score<=69:
//         console.log('C');
//         break;
//     case score>=50 && score<=59:
//         console.log('D');
//         break;
//     case score>=0 && score<=49:
//         console.log('F');
//         break;
//     default:
//         console.log('Invalid score');
//         break;
// }

let day = prompt("Whate is the day today?");
day = day.toLowerCase();

switch(true){
    case ['saturday', 'sunday'].includes(day):
        console.log(`${day} is a weekend.`);
        break;
    case ['monday', 'tuesday', 'wednesday','thursday', 'friday'].includes(day):
        console.log(`${day} is a working day.`);
        break;
    default:
        console.log("Invalid days");
        break;
}

//Level 3

let month= prompt("Enter a month:");
month = month.substring(0,1).toUpperCase() + month.substring(1,month.length).toLowerCase();
console.log(month);

switch(true){
    case ['January', 'March', 'May','July' ,'August', 'October', 'December'].includes(month):
          console.log(`${month} has 31 days.`);
          break;
    case ['April', 'June', 'September', 'November'].includes(month):
        console.log(`${month} has 30 days.`);
        break;
    case ['February'].includes(month):
          console.log(`${month} has 28 days.`);
          break;
    default:    
          console.log(`${month} is not a valid month.`);
          break;
}

// Write a program which tells the number of days in a month, now consider leap year.

let mon = prompt("Please enter a month number between 1-12");
let year = prompt("Please enter a year");
console.log(giveMonthDays(mon,year));
function giveMonthDays(month,year){
    
    if (month< 1 ||month> 12){
        return 'Invalid month';
    }
   let days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (isLeapYear(year) && month==2 ){
        return 29;
    }
    return days_in_month[month];
}

function isLeapYear(year) {
    if((year%4==0 && year%100!=0) || year%400){
     return true;
    }
     return false;
 }

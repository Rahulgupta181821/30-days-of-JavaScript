function fullName() {
    console.log("Rahul Kumar Gupta");

}

// fullName();

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
// fullName("Rahul", "Gupta");
// console.log(fullName);

/*
output: undefined undefined
        Rahul Gupta

In JavaScript, when you define multiple functions with the same name in the same scope, the last definition of the function will override any previous definitions.
 This means that only the most recent definition of the function will be accessible.
 Hence, JavaScript does not support method overlading.
*/

function addNumbers(par1, par2) {
    return par1 + par2;
}
// console.log(addNumbers(5, 6));
function areaOfRectangle(length, width) {
    return length * width;
}
// console.log(areaOfRectangle(5, 6));

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
// console.log(perimeterOfRectangle(5, 6));

function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
// console.log(volumeOfRectPrism(4, 5, 6));

function areaOfCircle(radius) {
    return Math.round(Math.PI * radius ** 2);
}
// console.log(areaOfCircle(5));

function circumOfCircle(radius) {
    return Math.round(Math.PI * 2 * radius);
}
// console.log(circumOfCircle(5));

function density(mass, volume) {
    return Math.ceil(mass / volume);
}
// console.log(density(20, 100));

function speed(distance, time) {
    return Math.ceil(distance / time);
}
// console.log(speed(20, 100));

function weight(mass, gravity) {
    return Math.ceil(mass * gravity);
}
// console.log(weight(20, 9.8));

function oF(temperatureInOC) {
    return (temperatureInOC * (9 / 5) + 32);
}

// console.log(oF(30));

function BMI(weight, height) {
    let bmi = weight / height ** 2;
    if (bmi < 18.5) {
        console.log("Underweight");

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal");
    } else if (bmi >= 24.9 && bmi <= 29.9) {
        console.log("Overweight");
    } else if (bmi >= 30) {
        console.log("Obese");
    }
}
// BMI(30, 160);
/* 
In JavaScript, the in operator is used to check if a particular property exists in an object. However, when it comes to arrays, the in operator behaves differently. 
It checks whether a given index exists in the array or not.
const myArray = ['apple', 'banana', 'orange'];

console.log(0 in myArray); // Output: true, because index 0 exists in the array
console.log(1 in myArray); // Output: true, because index 1 exists in the array
console.log(2 in myArray); // Output: true, because index 2 exists in the array
console.log(3 in myArray); // Output: false, because index 3 does not exist in the array
console.log('apple' in myArray); // Output: false, because 'apple' is not an index, it's a value
As you can see, when you use the in operator with an array, it checks whether the specified index exists in the array or not. It returns true if the index exists and false otherwise. If you try to check for a value instead of an index, it will return false, because the in operator doesn't check for values in arrays.

It's important to note that the in operator is not commonly used with arrays in JavaScript. Instead, you would typically use array methods like indexOf, includes, or iterate through the array to find specific values or indices.
*/
function checkSeason(month) {
    month = month.toLowerCase();
    if (["october", 'november'].includes(month)) {
        console.log("Autumn Season");
    } else if (["december", "january", "february"].includes(month)) {
        console.log("Winter Season");
    } else if (["march", 'april', 'may'].includes(month)) {
        console.log("Summer Season");
    } else if (["june", 'july', 'august', 'september'].includes(month)) {
        console.log("Spring Season");
    } else {
        console.log("Invalid Month", month);
    }
}

// checkSeason('JanUaRy');
const arr = ['Jan', 'Feb', 'Mar']
    // console.log(1 instanceof arr);

function findMax() {
    let max = -9999999999;
    for (const arg of arguments) {
        if (arg > max) {
            max = arg;
        }
    }
    return max;
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

function findMaximum(...args) {
    max = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}

// console.log(findMaximum(0, 10, 5))
// console.log(findMaximum(0, -10, -2))


// Level 2

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a, b, c, d) {
//     x = prompt("What\' the value of x?',Enter a number.");
//     y = -1 * ((a * x) + c) / b
//     return y;
// };
// console.log(solveLinEquation(2, -1, 5));

// (function (a, b, c, d) {
//     x = prompt("What\' the value of x?',Enter a number.");
//     y = -1 * ((a * x) + c) / b
//     console.log(y);
// })(2, 3, 4)
// const solveLinEquation1 = function (a, b, c) {
//     x = prompt("What\' the value of x?',Enter a number.");
//     y = -1 * ((a * x) + c) / b
//     return y;
// }

// console.log(solveLinEquation1(2, -1, 5));

function solveQuadraticEquation(a = 0, b = 0, c = 0) {
    console.log("arguments", arguments);
    if (a == 0 && b == 0) {
        return `{${0}}`;
    }
    if (a != 0) {
        x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
        x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
        if (x1 == x2) {
            return `{${x1}}`;
        } else {
            return `{${x1},${x2}}`;
        }
    } else {
        if (b != 0) {
            return -1 * (c / b);
        } else {
            return `{0}`;
        }
    }
}

// console.log( solveQuadraticEquation());
// console.log(solveQuadraticEquation(1, 4, 4));
// console.log(solveQuadraticEquation(1, -1, -2));
// console.log(solveQuadraticEquation(1, 7, 12));
// console.log(solveQuadraticEquation(1, 0, -4));
// console.log(solveQuadraticEquation(1, -1, 0));


const printArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

    }
    // printArray([2,3,4,5,6,7,8,9,10,11,12]);

const showDateTime = () => {
        let date = new Date();
        let day = date.getDate();
        let year = date.getFullYear();
        let month = date.getMonth();
        let hour = date.getHours();
        let min = date.getMinutes();
        console.log(typeof month.toString());
        if (day.toString().length == 1) {
            day = "0" + day;
        }
        if (month.toString().length == 1) {
            month = "0" + month;
        }
        if (hour.toString().length == 1) {
            hour = "0" + hour;
        }
        if (min.toString().length == 1) {
            min = "0" + min;
        }
        return `${day}/${month}/${year}  ${hour}:${min}`
    }
    // console.log(showDateTime());

const swapValues = (a, b) => {
        let temp = a;
        a = b;
        b = temp;
        return [a, b];
    }
    // console.log(swapValues(3, 4)) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4


const reverseArray = (arr) => {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(reverseArray(arr1));
// console.log(arr1)
// console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

const capitalizedArray = (function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();

    }
    return arr;
})(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ]);

// console.log(capitalizedArray);

const addItem = (...args) => {
    return args;
}
console.log(addItem('a', 'b', 'c', 'd', 'e'));

function addItem1() {
    const arr = Array();
    for (const item of arguments) {
        arr.push(item);
    }
    return arr;
}
// console.log(addItem1('rahul','mohit', 'rahm','rohit'));

const removeItem = (arr, index) => {
    arr.splice(index, 1);
    return arr;
}

// console.log(removeItem(['a', 'b', 'c', 'd', 'e'], 1));

const sumOfNumbers = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// console.log(sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const sumOfEven = (...args) => {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 == 0) {
            sum += args[i];
        }
    }
    return sum;
}

// console.log(sumOfEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const evensAndOdds = (n) => {
        if (n % 2 == 0) {
            console.log(`The number of Even are ${Math.ceil(n/2)+1}`);
            console.log(`The number of odds are ${Math.floor(n/2)}`);
        } else {
            console.log(`The number of Even are ${Math.floor(n/2)}`);
            console.log(`The number of odds are ${Math.ceil(n/2)}`);
        }
    }
    // evensAndOdds(9);

const randomUserIp = () => {
        ipAddress = '';
        for (let i = 0; i < 4; i++) {
            ipAddress += Math.floor(Math.random() * 256) + '.'
        }
        return ipAddress.slice(0, ipAddress.length - 2)
    }
    // console.log(randomUserIp());

const randomMacAddress = () => {
        let hexa = '0123456789ABCDEF';
        const macAddress = [];
        for (let i = 0; i < 6; i++) {
            macAddress.push(hexa.charAt(Math.floor(Math.random() * hexa.length)) + hexa.charAt(Math.floor(Math.random() * hexa.length)));

        }
        return macAddress.join(':');


    }
    // console.log(randomMacAddress());

const randomHexaNumberGenerator = () => {
        let hexa = '0123456789abcdef';
        let hexagen = '';
        for (let i = 0; i < 6; i++) {
            hexagen += hexa.charAt(Math.floor(Math.random() * hexa.length));

        }
        return '#' + hexagen;


    }
    // console.log(randomHexaNumberGenerator());


// Level 3

// const userGenerator = (function(){
//     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let numOfChars = prompt('What number of characters do you want?');  //6
//   let repeatFunc = prompt('What number of ids do you want to generate?');  //5
//   let result = '';
//   for(let i=0;i<repeatFunc;i++){
//     let randomId = '';
//     for(let j=0;j<numOfChars;j++){
//         randomId += possible.charAt(Math.floor(Math.random()*possible.length));
//     }
//     result += randomId + '\n';
//   }
//   return result;
// })();

// console.log(userGenerator);
// console.log(userGenerator);
/* 
this function calls only one times and it generates same value in each call;
such that we call two times and it generated same value.
*/

const userGenerator1 = () => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let numOfChars = prompt('What number of characters do you want?'); //6
    let repeatFunc = prompt('What number of ids do you want to generate?'); //5
    let result = '';
    for (let i = 0; i < repeatFunc; i++) {
        let randomId = '';
        for (let j = 0; j < numOfChars; j++) {
            randomId += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        result += randomId + '\n';
    }
    return result;
};

// console.log(userGenerator1());
// console.log(userGenerator1());

const rgbColorGenerator = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;

    }
    // console.log(rgbColorGenerator());


const arrayOfHexaColors = () => {
        let hexa = '0123456789abcdef';
        let hexagen = '';
        for (let i = 0; i < 6; i++) {
            hexagen += hexa.charAt(Math.floor(Math.random() * hexa.length));
        }
        return '#' + hexagen;
    }
    // console.log(arrayOfHexaColors());

/* 
Concept:

parseInt(hexa.slice(0,2), 16): The parseInt() function in JavaScript is used to parse a string and return an integer. It takes two parameters:

    The first parameter is the string to be parsed, which in this case is the substring we extracted earlier (hexa.slice(0,2)).
    The second parameter is the radix or base of the numeral system to be used, which in this case is 16. 
    A radix of 16 indicates that the string is a hexadecimal number.
    So, parseInt(hexa.slice(0,2), 16) parses the first two characters of the hexa string as a hexadecimal number and returns its decimal equivalent.

*/

const convertHexaToRgb = (hexa) => {
        let r = parseInt(hexa.slice(0, 2), 16);
        let g = parseInt(hexa.slice(2, 4), 16);
        let b = parseInt(hexa.slice(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // console.log(convertHexaToRgb('ffffff'));
    // let res=convertHexaToRgb('39ef96');  //rgb(57,239,150)
    // console.log(res);

const convertHexaToRgb1 = (hexa) => {
        hexa = hexa.toLowerCase();
        const hexaVal = {
            'a': 10,
            'b': 11,
            'c': 12,
            'd': 13,
            'e': 14,
            'f': 15
        }
        let arr = []
        for (let i = 0; i < hexa.length; i++) {
            if (hexa[i] in hexaVal) {
                arr[i] = hexaVal[hexa[i]];
            } else {
                arr[i] = +hexa[i];
            }
        }
        let r = arr[0] * 16 + arr[1];
        let g = arr[2] * 16 + arr[3];
        let b = arr[4] * 16 + arr[5];
        return `rgb(${r}, ${g}, ${b})`;

    }
    // console.log(convertHexaToRgb1('FFFFFF'));
    // let res=convertHexaToRgb1('39ef96');
    // console.log(res);

// 6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = (r, g, b) => {
    let hexa = r.toString(16);
    hexa += g.toString(16);
    hexa += b.toString(16);
    return hexa;
}
console.log(typeof(convertRgbToHexa(255, 255, 255))); // convert



// Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (hexaOrRgb, num) => {
    const arr = [];
    if (hexaOrRgb === 'hexa') {
        for (let i = 0; i < num; i++) {
            arr.push(arrayOfHexaColors());
        }
        return arr;
    } else if (hexaOrRgb === 'rgb') {
        for (let i = 0; i < num; i++) {
            arr.push(rgbColorGenerator());
        }
        return arr;
    }
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'



// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

const arrays = ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
console.log(shuffleArray(arrays));


const isEmpty = (args) => {
    if (typeof args === 'number') {
        return false;
    } else if (args.length === 0) {
        return true;
    }
    return false;
}
console.log(isEmpty([0]))

const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function isValidVariable(variableName) {
    // Regular expression to check if the variable name is valid
    const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    // Test if the variableName matches the regular expression
    return validVariableRegex.test(variableName);
}

// Example usage
console.log(isValidVariable('myVariable')); // Output: true
console.log(isValidVariable('123variable')); // Output: false
console.log(isValidVariable('_anotherVariable')); // Output: true
console.log(isValidVariable('my-Variable')); // Output: false
console.log(isValidVariable('$')); // Output: false

const sevenRandomNumbers = () => {
    let arr = [];
    while (arr.length < 7) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
        }
    }
    return arr;
}
console.log(sevenRandomNumbers())

const reverseCountries = (arr) => {
    let newArr = arr.copy();
    newArr.reverse();
    return newArr;
}
let arrnew = ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
console.log(reverseArray(arrnew));
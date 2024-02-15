function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num);
console.log('sum: ' + sum);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(countrie => console.log(countrie.toUpperCase()))
const number = [1, 2, 3, 4, 5];
const numberSquare = number.map(number => number * number);
console.log('number: ' + numberSquare);
console.log(number)

const numbers1 = [1, 2, 3, 4, 5]
const sum1 = numbers1.reduce((acc, cur) => acc + cur, 6)

console.log("sum:", sum1)
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
console.log("hello:",Math.max(1,3,5,7))

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


const paragraph="My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux,"
console.log(paragraph);

let string1 = 'JavaScript'
console.log(string1.substr(4))    // Script

let country = 'Finland'
console.log(country.substr(31, 4))   // land


let string2 = 'I love JavaScript.'

console.log(string2.lastIndexOf('love'))       // 67
console.log(string2.lastIndexOf('you'))        // 63
console.log(string2.lastIndexOf('JavaScript')) // 38



let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string3.match(/love/gi))
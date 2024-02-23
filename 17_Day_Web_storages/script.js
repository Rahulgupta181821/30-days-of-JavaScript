localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
localStorage.setItem('age', 200)
console.log(localStorage)
const skills = ['HTML', 'CSS', 'JS', 'React']
    //Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skills1 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills1)
localStorage.setItem('skills1', skillJSON)

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText);
console.log(localStorage)

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills2 = localStorage.getItem('skills')
console.log(firstName, age, skills2)

localStorage.clear()
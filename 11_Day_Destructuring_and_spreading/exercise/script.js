import countries_data from '../../data/countries_data.js';
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [{
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den);
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)
    // level 2
    // let [r1, r2, r3, r4, r5, r6, r7] = users

// console.log(r1, r2, r3, r4, r5, r6, r7);
users.forEach(user => {
    const { name, scores, skills, age } = user;
    console.log(name, scores, skills, age);
});

users.forEach(user => {
    const { name, scores, skills, age } = user;
    if (skills.length < 2) {
        console.log(name);
    }

});
// Level 3

// console.log(countries_data)
// countries_data.forEach(country => {
//     const { name, capital, languages, population, flag, region, area } = country;
//     console.log(name, capital, population, languages);
// })

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
//     [98, 85, 90, 95]
// ]
// let [name, skills, score] = student
// console.log(name, skills, score[2], score[3]);


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]
let convertArrayToObject = students => {
    return students.map(student => {
        const [name, skills, score] = student;
        return {
            'name': name,
            'skills': skills,
            'score': score
        }
    })


}

console.log(convertArrayToObject(students))

const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}


let { name, age, skills, frontEnd, backEnd, dataBase } = student1;
skills.frontEnd.push({
    skills: 'Bootstrap',
    level: 8
})
skills.backEnd.push({
    skills: 'Express',
    level: 9
})
skills.dataBase.push({
    skills: 'SQL',
    level: 8
})
skills.dataScience.push(
        'SQL')
    // console.log(skills)
let newStudent = {
    name: name,
    age: age,
    skills: skills
}
console.log(newStudent)
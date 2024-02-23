const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// level 1

// const skillsObj = JSON.stringify(skills, undefined, 4);
// console.log(skillsObj);

// const ageObj = JSON.stringify(age, undefined, 4);

// console.log(ageObj);
// console.log(typeof skillsObj);
// console.log(typeof ageObj)

// const isMarriedObj = JSON.stringify(isMarried, undefined, 4);
// console.log(isMarriedObj);

// const studentObj = JSON.stringify(student, undefined, 4);
// console.log(studentObj);
// level 2

// const studentJson = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
// console.log(studentJson);


// leve 3

// const textObj = JSON.parse(txt);
// console.log(Object.keys(textObj));
// const objectKey = Object.keys(textObj);
// const arr = []
// for (let item of objectKey) {
//     const maximum = textObj[item].skills.length;
//     arr.push({ item: item, maximum: maximum })
// }
// arr.sort((a, b) => {
//     return b.maximum - a.maximum
// })
// console.log(arr[0].item);
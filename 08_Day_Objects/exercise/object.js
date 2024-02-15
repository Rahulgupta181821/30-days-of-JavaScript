import countries from '../data/countries.js';
console.log(countries)
const dog = {};
console.log(dog)
dog.name = 'Tom';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = function() {
    return "woof woof";
}
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark())
dog.breed = 'pidbull'
dog.getDogInfo = function() {
    let info = `Name: ${dog.name}, age: ${dog.age}, color: ${dog.color} , breed: ${dog.breed}, foot: ${dog.legs}, properties: ${dog.bark()}  `
    return info;
}
console.log(dog.getDogInfo());

// Level 2

const users = {
        Alex: {
            email: 'alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }
    //   console.log(users);

// for (let itr of Object.keys(users)) {
//     // console.log(itr['skills']);
//     if (users[itr].skills.length > 1) {
//         console.log(itr);
//     }
// }
// let count = 0
// for (let itr of Object.keys(users)) {
//     // console.log(itr['skills']);
//     if (users[itr].points >= 50) {
//         // console.log(itr);
//         count++;
//     }
// }
// console.log(count);

// Find people who are MERN stack developer from the users object
for (let itr of Object.keys(users)) {
    // console.log(itr['skills']);
    const mearn = ["MongoDB", 'Express', 'React', 'Node']
    const toCheck = mearn.every(item => users[itr].skills.includes(item))
    if (toCheck) {
        console.log(itr);
    }
}
const copyPerson = Object.assign({}, users)
const updatedUsers = {
    ...users,
    ChatGPT: {
        email: 'chatgpt@example.com',
        skills: ['NLP', 'Machine Learning', 'JavaScript'],
        age: 999,
        isLoggedIn: true,
        points: 1000
    }
};

console.log(updatedUsers);
const userKeys = Object.keys(users)
console.log(userKeys);
const userValues = Object.values(users)
console.log(userValues);
// for (let i = 0; i < countries.length; i++) {
//     let name = countries[i]['name'];
//     let capital = countries[i]['capital'];
//     let population = countries[i]['population'];
//     let language = countries[i]['language'];
//     console.log(`${name}, ${capital}, ${population}, ${language}`);
// }
const personAccount = {
    'firstName': 'Rahul',
    'lastName': 'Gupta',
    incomes: {
        salary: 5000,
        onlinecourses: 15000,
        parttime: 1000
    },
    expenses: {
        groceries: 1500,
        bills: 3000
    },

    'totalIncome': function() {
        const incomeFrom = Object.keys(this.incomes);
        console.log(incomeFrom);
        let totalIncome = 0;
        for (let i = 0; i < incomeFrom.length; i++) {

            totalIncome += this.incomes[incomeFrom[i]]

        }
        return totalIncome
    },
    'totalExpense': function() {
        const expensesFrom = Object.keys(this.expenses);
        let totalExpenses = 0;
        for (let i = 0; i < expensesFrom.length; i++) {
            totalExpenses += this.expenses[expensesFrom[i]]
        }
        return totalExpenses

    }


}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense()); // 4500




const users1 = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
const signUp = () => {
    let userNameInput = prompt('Enter your first name: ');
    const username = []
    for (let i = 0; i < users1.length; i++) {
        username.push(users1[i].username);
    }
    if (username.includes(userNameInput)) {
        console.log('You already have an account.');
    } else {
        signIn();
    }
}

function signIn() {
    const newUser = {}
    newUser._id = generateId();
    newUser.username = prompt("Enter your first name.");
    newUser.email = prompt("Enter your email.");
    newUser.password = prompt("Enter your password.");
    newUser.createdAt = generateTime();
    users1.push(newUser);
}

function generateId() {
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));

    }
    return id;
}

function generateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let ampm;
    if (hours > 12) {
        hours = `${hours-12}`;
        ampm = 'PM';

    } else {
        ampm = 'AM';
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    return `${month}/${day}/${year}/ ${hours}:${mins} ${ampm}`;
}
// console.log(signUp());
// console.log(users1)
const products = [{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
}, {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
}, {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}]

const rateProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            return products[i].ratings;
        }
    }

}
console.log(rateProduct('mobile phone'));

const averageRating = (name) => {
    let ratingArr = rateProduct(name);
    if (ratingArr.length === 0) {
        console.log('Rating is not found');
    } else {
        let sum = 0;
        for (let i = 0; i < ratingArr.length; i++) {
            sum += ratingArr[i].rate;
        }
        let average = sum / ratingArr.length;
        console.log(average);
    }

}
averageRating('mobile phone');
averageRating('Laptop'); // Ratings not found
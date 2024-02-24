// const countriesAPI = 'https://restcountries.com/v2/all'
// const user = fetch(countriesAPI);
// console.log(user);
// user.then(function(data) {
//     console.log(data);
// })

// setTimeout(function() {

//     console.log('timer');
// }, 5000);

// function X(y) {
//     console.log("X");
//     y();
// }
// X(function y() {
//     console.log("y");
// })//Callback
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        if (skills.length > 0) {
            resolve(skills);

        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
});
doPromise
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
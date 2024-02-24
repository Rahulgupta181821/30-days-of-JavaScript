const countriesAPI = 'https://restcountries.com/v2/all'
const user = fetch(countriesAPI);
console.log(user);
user.then(function(data) {
    console.log(data);
})
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
    // fetch(countriesAPI)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         data.forEach((item) => {
    //             // console.log(item)
    //             let arr = item.languages
    //             console.log({

//                 countries: item.name,
//                 capital: item.capital,
//                 languages: arr.map((language) => language.name),
//                 population: item.population,
//                 flag: item.flag,
//                 region: item.region,
//             })
//         })
//     });

// // console.log("hello")

// fetch(catsAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((item) => {
//             console.log(item.name);
//         })
//     })

// Level 3

// fetch(catsAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         let sum = 0;
//         data.forEach((item) => {
//             // console.log(item);
//             let weight = item.weight.metric;

//             let a = parseInt(weight[0], 10)
//             let b = parseInt(weight[4], 10)

//             // console.log(a, b);
//             sum += b - a;

//         });

// let toaltItem = data.length;
// console.log(sum, toaltItem);
// console.log(sum / toaltItem);
// return sum / toaltItem;
// });


// fetch(countriesAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(data);
//         let array = [];
//         data.forEach((item) => {
//             array.push({
//                 country: item.name,
//                 area: item.area === undefined ? 0 : item.area,

//             })
//         })
//         array.sort((a, b) => {
//             if (a.area > b.area) return -1;
//             if (a.area < b.area) return 1;
//             return 0;
//         })
//         console.log(array.filter((item) => array.indexOf(item) < 10));
//     });



fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        let totalLanguages = 0;
        data.forEach((item) => {
            let language = item.languages;
            totalLanguages += language.length;
        });
        console.log(totalLanguages);
    });
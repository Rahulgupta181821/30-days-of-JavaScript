import countries from '../../data/countries.js';
import countries_data from '../../data/countries_data.js';
// console.log(countries_data);
// console.log(countries);
// forEach: it traverses the whole array and does not modify the original array.
// It does not return anything.

// Map: it traverses the whole array and modifies the element of the array and returns the modified array.


// filter: it traverses the whole array with the specified condition and returns the new array with specified conditions.

//reduce:it traverses the whole array and it takes accumelatore,element and optional initial values and return a single value. 
// If initial values is not specified,it takes array first value as a initial value. if an array is empty, javascript will throw an error.
// callback functions:it takes a parameter of another functions it known as callback function.


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]
// countries.forEach((countrie) => console.log(countrie.toUpperCase()))
// names.forEach((name) => console.log(name))
// numbers.forEach((number) => console.log(number))
// console.log(countries.map((item) => item.toUpperCase()))
// console.log(countries.map((item) => item.length))
// console.log(numbers.map((item) => item ** 2))
// console.log(names.map((item) => item.toUpperCase()))
// console.log(products.map((item) => item.price))
// console.log(countries.filter((item) => item.includes('land')))
// console.log(countries.filter((item) => item.length < 7))
// console.log(countries.filter((item) => item.length >= 6))
// console.log(countries.filter((item) => item.startsWith('E')))
// console.log(products.filter((item) => item.price > 1))
// const getStringLists = (arr) => {
//     return arr.filter((item) => typeof item === 'string');
// }
// arr = ['Delhi', 4, 4.5, true, false, 'India', 'Rahul']
// console.log(getStringLists(arr))
// console.log(numbers.reduce((a, b) => a + b, 0))
// console.log(countries.reduce((a, b) => a + ',' + ' ' + b))
// console.log(names.some((name) => name.length > 7))
// console.log(countries.every((country) => country.includes('land')))
// console.log(countries.find((country) => country.length == 6))
// console.log(countries.findIndex((country) => country.length == 6))
// console.log(countries.findIndex((country) => country === 'Norway'))
// console.log(countries.findIndex((country) => country === 'Russia'))

// //level 2

// // Find the total price of products by chaining two or more array iterators(eg.arr.map(callback).filter(callback).reduce(callback))
// const totalPrice = products.filter((item) => item.price > 1).map((item) => item.price).reduce((a, b) => a + b)
// console.log(totalPrice);
// const totalSum = products.reduce((a, b) => {
//     if (b.price > 1) {
//         return a + b.price;
//     }
//     return a;
// }, 0)
// console.log(totalSum)
const categorizeCountries = (countries) => {
        return countries.filter((country) => {
            return ['land', 'island', 'stan'].some((item) => country.includes(item))
        })
    }
    // console.log(categorizeCountries(countries));



// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const arrayObject = (countries) => {
    const obj = {}
    countries.forEach((country) => {
        let firstLetter = country.charAt(0).toUpperCase();
        if (obj[firstLetter]) {
            obj[firstLetter]++;
        } else {
            obj[firstLetter] = 1;
        }
    })

    let result = Object.keys(obj).map((key) => {
        return {
            letter: key,
            number: obj[key]
        }
    })
    return result;
}

// console.log(arrayObject(countries));




// Declare a getFirstTenCountries function andreturn an array of ten countries.Use different functional programming to work on the countries.js array
const getFirstTenCountries = ((countries) => {
        return countries.filter((country) => {
            return countries.indexOf(country) < 10;
        })
    })
    // console.log(getFirstTenCountries(countries));


// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = ((countries) => {
        return countries.filter((country) => {
            return countries.indexOf(country) >= countries.length - 10;
        })
    })
    // console.log(getLastTenCountries(countries));
    // Find out which letter is used many times as initial for a country name from the countries array(e.g. Finland, Fiji, France etc).


const maximumLetterCount = (countries) => {
        let obj = {};
        countries.forEach((country) => {
            let firstLetter = country.charAt(0).toUpperCase();
            if (obj[firstLetter]) {
                obj[firstLetter]++;
            } else {
                obj[firstLetter] = 1;
            }
        })
        let result = Object.keys(obj).reduce((a, b) => {
            if (obj[a] > obj[b]) {
                return a
            }
            return b;
        })
        console.log(obj[result])
        return result;
    }
    // console.log(maximumLetterCount(countries));

//level 3

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
const newCountries_data = countries_data.slice();
newCountries_data.sort((a, b) => {
        if (a.population < b.population) return -1;
        if (a.population > b.population) return 1;
        return 0;
    })
    // console.log(newCountries_data)

// Find the 10 most spoken languages:

const mostSpokenLanguages = (arr, counter) => {
        let obj = {};
        arr.forEach((item) => {
            item["languages"].forEach((lang) => {
                if (obj[lang]) {
                    obj[lang]++;
                } else {
                    obj[lang] = 1;
                }
            })
        })
        console.log(obj);
        let result = Object.keys(obj).map((key) => {
            return {

                country: key,
                count: obj[key]
            }
        })
        console.log(result);
        result.sort((a, b) => {
            if (a.count < b.count) return 1;
            if (a.count > b.count) return -1;
            return 0;
        })
        return result.filter((item) => {
            return result.indexOf(item) < counter;
        })
    }
    // console.log(mostSpokenLanguages(countries_data, 10))
    // console.log(mostSpokenLanguages(countries_data, 3))

// Use countries_data.js file create afunction which create the ten most populated countries
const mostPopulatedCountries = (arr, counter) => {
        let obj = [];
        obj = arr.map((item) => {
            return { 'country': item.name, 'population': item.population };
        })
        obj.sort((a, b) => {
            if (a.population < b.population) return 1;
            if (a.population > b.population) return -1;
            return 0;
        })
        return obj.filter((item) => obj.indexOf(item) < counter);
    }
    // console.log(mostPopulatedCountries(countries_data, 10));
    // console.log(mostPopulatedCountries(countries_data, 3));

// let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {

        data: [],
        addData: function(newData) {
            this.data = this.data.concat(newData);
        },
        'count': function() {
            return this.data.length;
        },
        'sum': function() {
            return this.data.reduce((a, b) => a + b);
        },
        // 'min': function() {
        //     return this.data.reduce((a, b) => {
        //         return a > b ? b : a;

        //     })
        // },
        min: function() {
            return Math.min(...this.data);
        },
        'max': function() {
            return this.data.reduce((a, b) => {
                return a < b ? b : a;

            })
        },
        range: function() {
            return this.max() - this.min();
        },
        mean: function() {
            return this.sum() / this.count();
        },
        median: function() {
            const sortedData = this.data.slice().sort((a, b) => a - b);
            const mid = Math.floor(sortedData.length / 2);
            return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
        },
        mode: function() {
            const frequency = {};
            this.data.forEach(val => {
                frequency[val] = (frequency[val] || 0) + 1;
            });
            let maxFrequency = 0;
            let modes = [];
            for (const key in frequency) {
                if (frequency[key] > maxFrequency) {
                    modes = [key];
                    maxFrequency = frequency[key];
                } else if (frequency[key] === maxFrequency) {
                    modes.push(key);
                }
            }
            return { mode: modes, count: maxFrequency };
        },
        variance: function() {
            const mean = this.mean();
            const squaredDiffs = this.data.map(val => Math.pow(val - mean, 2));
            return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
        },
        std: function() {
            return Math.sqrt(this.variance());
        },
        freqDist: function() {
            const frequency = {};
            this.data.forEach(val => {
                frequency[val] = (frequency[val] || 0) + 1;
            });
            return Object.entries(frequency).sort((a, b) => b[1] - a[1]).map(entry => [entry[1], parseInt(entry[0])]);
        }
    }
    // Example usage with the provided 'ages' array
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
statistics.addData(ages);
console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 29.76
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // { mode: ['26'], count: 5 }
console.log('Variance: ', statistics.variance()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.183300132670378
console.log('Frequency Distribution: ', statistics.freqDist());
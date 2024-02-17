import countries_data from '../../data/countries_data.js';
const st = new Set();
console.log(st);
for (let i = 0; i < 11; i++) {
    st.add(i);
}
console.log(st);
console.log(st.delete(8)); //true
console.log(st.delete(12)); //false
console.log(st);
console.log(st.clear()); //undefined
console.log(st);
let arr = ['Rahul', 'Mayank', 'Vishal', 'Pal', 'Abhishek'];
for (let item of arr) {
    st.add(item);
}
console.log(st);
const countries = ['Finland', 'Sweden', 'Norway']
const map1 = new Map();
for (let country of countries) {
    map1.set(country, country.length);
}
console.log(map1);

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
    // const unionOfElements = new Set([...a, ...b]); //or 
const unionOfElements = new Set(b);
for (let item of a) {
    unionOfElements.add(item);
}
const B = new Set(b);
console.log(unionOfElements);
// const c = a.filter((item) => {
//     return B.has(item);
// });
const c = a.filter((item) => {
    return b.includes(item);
})
const C = new Set(c);
console.log("intersections", C);

const set_languages = new Set();


for (let item of countries_data) {
    // for (let lang of item.languages) {
    //     set_languages.add(lang);
    // }
    item.languages.forEach((lang) => set_languages.add(lang));
}
console.log(set_languages);
const mostSpokenLanguages = (array, res) => {
    let lang_map = {};
    array.forEach((item) => {
            item.languages.forEach((lang) => {
                if (lang_map[lang]) {
                    lang_map[lang]++;
                } else {
                    lang_map[lang] = 1;
                }
            })
        })
        // console.log(lang_map);
    let result = Object.keys(lang_map).map((key) => {
        return {

            country: key,
            count: lang_map[key]
        }
    })
    console.log(result);
    result.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    })
    result.map((item) => {
        let obj = {};
        obj[item.country] = item.count;
        return obj;
    })
    return result.filter((item) => result.indexOf(item) < res);

}
console.log(mostSpokenLanguages(countries_data, 10))
console.log(mostSpokenLanguages(countries_data, 3))
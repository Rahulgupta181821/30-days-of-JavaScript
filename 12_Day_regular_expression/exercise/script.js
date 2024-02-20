let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g;

const matches = txt.match(pattern);
let a = parseInt(matches[0], 10);
let b = parseInt(matches[1], 10);
let c = parseInt(matches[2], 10);
const results = a * 12 + b + c * 12;
console.log(results)



const text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const patt = /-?\d+/gi;
let matche = text.match(patt).map(Number);
let result = Math.max(...matche) - Math.min(...matche)
console.log(result)

const is_valid_variable = (text) => {
    const pattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/
    return pattern.test(text)
}
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('fi-rst-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));
console.log(is_valid_variable('f'));
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (text, counter) => {
    const pattern = /\b\w+\b/g;

    let arrayItems = text.match(pattern);
    if (counter === undefined) {
        counter = arrayItems.length;
    }
    const set = new Set(arrayItems)
    let array = [];
    for (let item of set) {
        let obj = {};
        arrayItems.forEach(els => {
            if (obj[els]) {
                obj[els] += 1
            } else {

                obj[els] = 1;
            }
        })
        array.push({
            word: item,
            count: obj[item]
        });
    }
    array.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    })
    console.log(array.filter((item) => array.indexOf(item) < counter));
}
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 5));
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (sentence) => {
    return sentence.replace(/%|&|@|#|\?|;|!|\$/g, '');
}
let clearCode = cleanText(sentence);
console.log(clearCode);
const mostFrequentWords = (clantext) => {
    const pattern = /\b\w+\b/g;
    let arrayItems = clantext.match(pattern);
    let obj = {};
    arrayItems.forEach((item) => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    })
    let array = [];
    for (let item in obj) {
        array.push({
            word: item,
            count: obj[item]
        });
    }
    return array.sort((a, b) => {
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;

    }).filter((item) => array.indexOf(item) < 3)
}
console.log(mostFrequentWords(clearCode));
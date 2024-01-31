// Level 1

let challenge = "30 days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,3));
console.log(challenge.substr(3,challenge.length));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
let company='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(company.split(', '));
console.log(challenge.replace("JavaScript","Python"));
console.log(challenge.charAt(15));
let charCode= challenge.indexOf('J');
console.log(challenge.charCodeAt(charCode));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));

let sente = ' 30 Days Of JavaScript ';
console.log(sente.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/gi));
let res=''
res = res.concat('30 days of',' JavaScript');
console.log(res);
console.log(challenge.repeat(2));

//Level 2

let sen="The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'\n by John Holmes teaches us to help one another";
console.log(sen);
let sent="Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.";

console.log(sent);

console.log(typeof '10')
console.log(typeof 10)
console.log(typeof +'10')//or 
console.log(typeof parseInt('10'))//or
console.log(typeof Number('10'));//or

console.log(parseFloat('9.8'))
console.log(Math.round(parseFloat('9.8')));//or
console.log(Math.ceil(parseFloat('9.8')));

console.log('python'.includes('on') && 'jargon'.includes('on'));


const sen1= ' hope this course is not full of jargon.';

console.log(sen1.includes('jargon'));
console.log(Math.floor(Math.random()*101))
console.log(Math.floor(Math.random()*51)+50);
console.log(Math.floor(Math.random()*256))

let strin='JavaScript'
console.log(strin[Math.floor(Math.random()*strin.length)]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

let substr1 ='You cannot end a sentence with because because because is a conjunction';
console.log(substr1.substr(substr1.indexOf('because because because'),'because because because'.length));


//Level 3

let substr2 ='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let counter= substr2.match(/love/gi)//it converts to array
console.log(counter.length)

let substr3 ='You cannot end a sentence with because because because is a conjunction';
console.log(substr3.match(/because/gi).length);

let sentence1 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"

let ans = sentence1.replace(/%|&|@|#|;|!|\$/g,'');
// ans= ans.replace(/\$/g,'');//if we want $ sign into character then we use \$ character.\ convert the $ into character.
console.log(ans);


let ans2 = 5000*12 + 10000+ 15000*12;
console.log(`${ans2} euro`);

 class Animal {
     constructor(name, age, color, legs) {
         this.name = name;
         this.age = age;
         this.color = color;
         this.legs = legs;

     }
     getAnimalInfo() {
         let info = `Meet ${this.name}! It is ${this.age} years old, ${this.color}, and has ${this.legs} legs.`;
         return info;
     }
 }
 const bird = new Animal('mithu', 3, 'blue', 2);
 console.log(bird.getAnimalInfo());
 class Dog extends Animal {
     introduce() {
         console.log('Hi, I am a dog!');
     }
 }
 const dog1 = new Dog('Bolt', 5, 'brown ', 4);
 console.log(dog1.getAnimalInfo());
 dog1.introduce();

 class Cat extends Animal {
     introduce() {
         console.log("What\'s up, I'm a cat.");
     }
 }
 const cat = new Cat('Lucy', 2, 'black', 4);
 console.log(cat.getAnimalInfo());
 console.log(cat);
 cat.introduce();

 // Level 2
 class Cow extends Animal {
     getAnimalInfo() {
         let info = `Hi, I'm a cow. My name is ${this.name}. I am ${this.age} years old, My color is ${this.color}, and have ${this.legs} legs.`
         return info;
     }
 }
 const cow = new Cow('lata', 2, 'black', 4);
 console.log(cow.getAnimalInfo());


 //  Level 3
 class Statistics {

     constructor(arr) {
         this.arr = arr;
     }
     count() {
         return this.arr.length;
     }
     sum() {
         return this.arr.reduce((a, b) => a + b);
     }
     min() {
         return Math.min(...this.arr);
     }
     max() {
         return Math.max(...this.arr);
     }
     range() {
         return this.max() - this.min();
     }
     mean() {
         return Math.ceil(this.sum() / this.count());
     }
     median() {
         const sortedData = this.arr.sort((a, b) => a - b);
         const mid = Math.floor(sortedData.length / 2);
         return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
     }
     mode() {
         const frequency = {};
         this.arr.forEach((item) => {
             if (frequency[item]) {
                 frequency[item]++;
             } else {
                 frequency[item] = 1;
             }
         });
         let array = [];
         //  this.arr.forEach((item) => {
         //      array.push({
         //          mode: item,
         //          count: frequency[item]

         //      })
         //  });
         for (let item in frequency) {
             array.push({
                 mode: item,
                 count: frequency[item]

             })
         }
         //  console.log(array);
         array.sort((a, b) => {
             if (a.count > b.count) return -1;
             if (a.count < b.count) return 1;
             return 0;
             //  return b.count - a.count;
         });
         //  console.log(array);
         return array[0];
     }
     var () {
         const mean = this.mean();
         const array = this.arr.map((item) => {
             return Math.pow(item - mean, 2);
         })
         const sum = array.reduce((sum, item) => sum + item)
         return sum / this.count();
     }
     std() {
         return Math.sqrt(this.var());
     }
     freqDist() {
         const frequency = {};
         this.arr.forEach(val => {
             frequency[val] = (frequency[val] || 0) + 1;
         });
         return Object.entries(frequency).sort((a, b) => b[1] - a[1]).map(entry => [entry[1], parseInt(entry[0])]);
     }
 }



 ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
 const statistics = new Statistics(ages);
 console.log(statistics.count());
 console.log(statistics.sum());
 console.log('Min: ', statistics.min()) // 24
 console.log('Max: ', statistics.max()) // 38
 console.log('Range: ', statistics.range());
 console.log('Mean: ', statistics.mean()) // 30
 console.log('Median: ', statistics.median()) // 29
 console.log('Mode: ', statistics.mode());
 console.log('Variance: ', statistics.var()) // 17.5
 console.log('Standard Deviation: ', statistics.std()) // 4.2
 console.log('Frequency Distribution: ', statistics.freqDist())


 class PersonAccount {
     constructor(firstname, lastname, incomes, expenses) {
         this.firstname = firstname;
         this.lastname = lastname;
         this.incomes = incomes;
         this.expenses = expenses;

     }
     totalIncome() {
         const incomeValues = Object.values(this.incomes);
         const totalIncome = incomeValues.reduce((a, b) => a + b);
         return totalIncome;
     }
     totalExpense() {
         const expenseValue = Object.values(this.expenses)
         const totalExpense = expenseValue.reduce((a, b) => a + b);
         return totalExpense;
     }
     addIncome(source, value) {
         this.incomes[`${source}`] = value;
         return 'successfully added'
     }
     addExpense(source, value) {
         this.expenses[`${source}`] = value;
         return 'successfully added'
     }
     accountBalance() {
         return this.totalIncome() - this.totalExpense();
     }
     accountInfo() {
         let incomeKeys = Object.keys(this.incomes);
         let formattedIncomes = `${incomeKeys.slice(0,-1).join(', ')} and ${incomeKeys.slice(-1)}`;
         let expenseKeys = Object.keys(this.expenses);
         let formedExpense = `${expenseKeys.slice(0,-1).join(', ')} and ${expenseKeys.slice(-1)}`;

         let info = `This is ${this.firstname } ${this.lastname }'s account.\nThe user has incomes from ${formattedIncomes}.\nThe total income is ${this.totalIncome()}.\nThe user has expenses from ${formedExpense}.\nThe total expense is ${this.totalExpense()}.`
         return info;
     }

 }

 const account1 = new PersonAccount('Ramona', 'Doe', { 'salary': 500, 'online course': 700, 'part time': 150 }, { 'bills': 150, 'groceries': 250 });

 console.log(account1.accountInfo());
 console.log(account1.addIncome('flea market', 50));
 console.log(account1.addExpense('books', 30));
 console.log(account1.accountInfo());
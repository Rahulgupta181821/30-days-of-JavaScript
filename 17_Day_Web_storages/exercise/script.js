localStorage.setItem('firstName', 'Rahul')
localStorage.setItem('lastName', 'Gupta')
localStorage.setItem('age', 34)
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Delhi')
console.log(localStorage);
//level 2
const student = {
    firstName: 'Rahul',
    lastName: 'Gupta',
    age: 34,
    country: 'India',
    city: 'Delhi',
    skills: ['Html', 'css', 'js', 'python']
}

const studentToJson = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentToJson);
console.log(localStorage);
//Level 3
const personAccount = {
    firstName: 'Rahul',
    lastName: 'gupta',
    incomes: {
        salary: 5000,
        onlinecourses: 15000,
        parttime: 1000
    },
    expenses: {
        groceries: 1500,
        bills: 3000
    },
    totalIncome: function() {
        const incomeValues = Object.values(this.incomes);
        return incomeValues.reduce((item, sum) => item + sum);
    },
    totalExpense: function() {
        const expenseValue = Object.values(this.expenses)
        return expenseValue.reduce((item, sum) => item + sum);
    },
    addExpense: function(key, value) {
        this.expenses[key] = value;
    },
    addIncome: function(key, value) {
        this.incomes[key] = value;
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    },
    accountInfo: function() {
        let incomeKeys = Object.keys(this.incomes);
        let formattedIncomes = `${incomeKeys.slice(0, -1).join(', ')} and ${incomeKeys.slice(-1)}`;
        let expenseKeys = Object.keys(this.expenses);
        let formattedExpenses = `${expenseKeys.slice(0, -1).join(', ')} and ${expenseKeys.slice(-1)}`

        let info = `This is ${this.firstName} ${this.lastName}'s account.\n The user has incomes from ${formattedIncomes}.\nThe user has expenses from ${formattedExpenses}.\nThe total expense is ${this.totalExpense()}.`;
        return info;
    }

}
console.log(personAccount.accountInfo())

const personAccountToJson = JSON.stringify(personAccount, undefined, 2);
localStorage.setItem('personAccountToJson', personAccountToJson);
console.log(localStorage.getItem('personAccountToJson'));
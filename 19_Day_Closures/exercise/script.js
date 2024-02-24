function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}

// let func = outerFunction();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());


function fruitsItems() {
    let fruits = ['apple', 'banana', 'cherry'];

    function addFruits(items = undefined) {
        if (items != undefined) {
            console.log("adding fruits");
            fruits.push(items);
        }
        return fruits;
    }

    function removeFruits() {
        console.log(fruits.pop());
        return fruits;
    }
    return {
        addFruits: addFruits,
        removeFruits: removeFruits
    }
}
let fruitsfun = fruitsItems();

console.log(fruitsfun.addFruits("mango"));
console.log(fruitsfun.removeFruits());

// level 3

function personAccount() {
    let firstName = 'Rahul';
    let lastName = 'Gupta';
    let incomes = {
        salary: 5000,
        onlinecourses: 15000,
    };
    let expenses = {
        groceries: 1500,
        bills: 3000
    };

    function totalIncome() {

        let incomeFrom = Object.values(incomes);
        let toalIncome = incomeFrom.reduce((a, b) => a + b, 0);
        return toalIncome;
    }

    function totalExpense() {

        let expensesFrom = Object.values(expenses);
        let toalExpense = expensesFrom.reduce((a, b) => a + b);
        return toalExpense;
    }

    function addIncome(items, value) {
        incomes[items] = value;
        return 'Successfully added';

    }

    function addExpense(items, value) {
        expenses[items] = value;
        return 'Successfully added';
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    function accountinfo() {
        let incomeKeys = Object.keys(this.incomes);
        let formattedIncomes = `${incomeKeys.slice(0, -1).join(', ')} and ${incomeKeys.slice(-1)}`;
        let expenseKeys = Object.keys(this.expenses);
        let formattedExpenses = `${expenseKeys.slice(0, -1).join(', ')} and ${expenseKeys.slice(-1)}`
        let totalExp = this.totalExpense();
        console.log(totalExp);
        let info = `This is ${this.firstName} ${this.lastName}'s account.\n The user has incomes from ${formattedIncomes}.\nThe user has expenses from ${formattedExpenses}.\nThe total expense is ${totalExp}.`;
        return info;
    }
    return {
        firstName: firstName,
        lastName: lastName,
        incomes: incomes,
        expenses: expenses,
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance,
        accountinfo: accountinfo
    }
}

let account = personAccount();
console.log(account.accountinfo());
console.log(account.totalExpense());
console.log(account.accountBalance());
console.log(account.totalIncome());
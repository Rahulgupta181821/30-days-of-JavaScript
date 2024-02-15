
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

/*The function sumAllNums() is defined without any explicit parameters. This means it can accept any number of arguments.

When you call sumAllNums(1, 2, 3, 4), you're passing four arguments: 1, 2, 3, and 4.

Inside the sumAllNums() function, the arguments object is a special array-like object that contains all the arguments passed to the function. It allows you to access these arguments even if they are not explicitly defined as parameters in the function declaration.

When you log arguments, you see that it prints Arguments(4) indicating that there are four arguments passed to the function. Following that, it displays the array-like representation of the arguments object: [1, 2, 3, 4].

Additionally, you see other properties of the arguments object:

    callee: A reference to the currently executing function (sumAllNums in this case).
    Symbol(Symbol.iterator): A built-in symbol used for iterating ove*/

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
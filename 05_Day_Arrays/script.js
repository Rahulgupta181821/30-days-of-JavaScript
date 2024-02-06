const arr= Array();
console.log(arr);

const arr1= [];
console.log(arr1);
console.log(arr1===arr);
// both are different Object.

let js = 'JavaScript'
const charInJavaScript = js.split('');
console.log(charInJavaScript);
const eightEmpthValues = Array(8).fill([1,2]);
/*
 "Fill all the array elements with a static value," 
 it means that every element in the array should be assigned the same fixed or constant value.
For example, if you have an array in a programming language,
you might use a function or a loop to set each element of the array to a specific value. 
This value is considered static because it doesn't change throughout the process of filling the array.
my_array = [0, 0, 0, 0, 0]

# Filling the array with a static value, let's say 1
static_value = 1

for i in range(len(my_array)):
    my_array[i] = static_value

print(my_array)





*/
console.log(eightEmpthValues);
const eightEmpthValues1= [];
// without arr constructor, we don't create a given specified array slot.
console.log("hdgd",eightEmpthValues1);
eightEmpthValues1.fill('X');//because it length is 0. so we don't use fill method.
console.log(eightEmpthValues1);

const firstList = [1, 2, 3,3,3,3,3]
const secondList = [4, [5, 6]]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
/*
output:
array(5) [ 1, 2, 3, 4, (2) […] ]
0: 1
1: 2
2: 3
3: 4
4: Array [ 5, 6 ]
length: 5
*/
console.log(firstList.indexOf(3));

const numbers = [1, 2, 3, [4, 5]]
console.log(Array.isArray(numbers))
console.log(numbers.join('#'));
// output:1#2#3#4,5

const number = [1, 2, 3, 4, 5]
number.unshift(8) // -> add one item from the beginning
console.log(number) // -> [0,1,2,3,4,5]
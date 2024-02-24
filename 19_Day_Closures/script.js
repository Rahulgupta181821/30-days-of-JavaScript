function outerFunction() {
    let count = 0;

    function plusOne() {
        count++;
        return count;
    }

    function minusOne() {
        count--;
        return count;
    }
    return {
        pluseOne: plusOne(),
        minusOne: minusOne()
    }
}

const innerFunct = outerFunction();
console.log(innerFunct.pluseOne)
console.log(innerFunct.minusOne)
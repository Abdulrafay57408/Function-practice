// add function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// Even number checker function
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(3));
// multiply function
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 3));
// greet function
function greet(name) {
    return "Hello! ".concat(name);
}
console.log(greet("rafay"));
// Calculate Area function
function calculateArea(length, width) {
    if (length === void 0) { length = 1; }
    if (width === void 0) { width = 1; }
    return length * width;
}
console.log(calculateArea(2, 3));
// calculate exponent function
var power = function (base, exponent) {
    return Math.pow(base, exponent);
};
console.log(power(2, 3));
// capitalize 1st letter function
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("rafay"));
// repeat message function
function printMessage(message, num) {
    if (num === void 0) { num = 1; }
    var mesRepeat = "";
    for (var i = 1; i <= num; i++) {
        mesRepeat += "".concat(message, "\n");
    }
    return mesRepeat;
}
console.log(printMessage("Rafay", 3));
// calculate average of an array function
var averages = function (numbers) {
    var avg = 0;
    for (var i in Range = numbers) {
        avg = avg + numbers[i];
    }
    return avg / numbers.length;
};
console.log(averages([2, 3, 4, 5, 6, 9]));
// prime number checker function
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
            break;
        }
    }
    return true;
}
console.log(isPrime(7));

// add function
function add(a: number , b:number){
    return a + b
}

// Even number checker function
function isEven(num:number){
    if (num % 2 ==0) {
        return true
    } 
    else {
        return false
    }
}

// multiply function
let multiply = (num1 : number , num2: number) => {
    return num1 * num2
}

// greet function
function greet(name: string){
    return `Hello! ${name}`
}

// Calculate Area function
function calculateArea (length: number = 1 , width:number = 1 ){
    return length * width
}

// calculate exponent function
let power = (base:number, exponent: number) => {
    return base ** exponent
}

// capitalize 1st letter function
function capitalize(word:string){
    return word[0].toUpperCase() + word.slice(1)
}

// repeat message function
function printMessage(message:string , num:number = 1){
    let mesRepeat = ""
    for (let i= 1 ; i <= num ; i++) {
        mesRepeat += `${message}\n`
    }
    return mesRepeat
}

// calculate average of an array function
let averages = (numbers) => {
    let avg : number = 0
    for (let i in Range=numbers){
         avg = avg + numbers[i]
    }
    return avg / numbers.length
}

// prime number checker function
function isPrime(num:number){
    for (let i =2 ; i < num ; i++){
        if (num % i ==0){
            return false
            break
        }
    }
    return true
}

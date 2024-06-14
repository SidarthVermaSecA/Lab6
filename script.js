let myNumber = 10;
let myString = "Hello JavaScript!"

console.log(myNumber);
console.log(myString);

for (i=1; i<=myNumber; i++){
    console.log(i);
}

for (i=1; i<=5; i++){
    console.log(3*i);
}


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

console.log("Sum of these two numbers is:", addNumbers(num1, num2));
console.log("Product of these two numbers is:", multiplyNumbers(num1, num2));



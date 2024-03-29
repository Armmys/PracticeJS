// 19. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / 
// Functions
// Instruction:
// - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum 
// of all positive numbers in an array. The function should return the sum of positive 
// numbers. If the array is empty or contains no positive numbers, the function should 
// return 0.
// Initiate code:
// Insert your code here
function sumPositiveNumbers(num){
    let total = 0
    num.forEach(num1 => {
        if(num1 >= 0) {
            total += num1
        }else(num1 < 0)
        return 0
    });
    return total
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
console.log(sumPositiveNumbers([-1, -2, -3])); 
console.log(sumPositiveNumbers([])); 
// output
// 42
// 0
// 0
// 13. // Functions / Arrays / Arrays Functions
// Instruction:
// - Write a function reverseArray(arrayValue) to reverse an array.
// Initiate code:
let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here
function reverse(num){
    let Renum = []
    
    Renum = [...num].reverse()

    return Renum
}

console.log(reverse(numbers))
// return value will be [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]
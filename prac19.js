// 20. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / 
// Functions
// Instruction:
// - Write a JavaScript function sameNumbers(numArray1, numArray2) to receive two 
// arrays of numbers and return an array that contains the numbers from both arrays 
// without repeating numbers.
// Initiate code:
// Insert your code here
// function sameNumbers(num1, num2){
//     let sameNum = []
//     num1.forEach(inNum1 => {
//         if(!sameNum.includes(inNum1)){
//             sameNum.push(inNum1)
//         }
//     });
//     num2.forEach(inNum2 => {
//         if(!sameNum.includes(inNum2)){
//             sameNum.push(inNum2)
//         }
//     });
//     return sameNum
// }

function sameNumbers(num1, num2){
    let theSame = []
    let sameNum = [...num1, ...num2]
    sameNum.forEach(inNum => {
        if(!theSame.includes(inNum)){
            theSame.push(inNum)
        }
    });
    return theSame
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]));
// output
// [
//  1, 2, 3, 4,
//  5, 8, 47, 56
// ]
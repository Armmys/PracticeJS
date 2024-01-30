// 17. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / 
// Functions
// Instruction:
// - Create a function calculateGrade(scores) that takes an array of numerical scores and 
// returns the corresponding letter grade (A, B, C, D, or F) based on the average score.
// 17.1 Calculate the average score.
// 17.2 Based on the average score, determine the letter grade:
// • 90-100: A
// • 80-89: B
// • 70-79: C
// • 60-69: D
// • Below 60: F
// Return the letter grade.
// Initiate code:
function calculateGrade(scores) {
    let grades = findAverageScore(scores)
        if (grades >= 90 && grades <= 100) {
            return ('A')
        } else if (grades >= 80 && grades <= 89) {
            return ('B')
        } else if (grades >= 70 && grades <= 79) {
            return ('C')
        } else if (grades >= 60 && grades <= 69) {
            return ('D')
        } else if (grades < 60) {
            return ('F')
        } else {
            return 'invalid score'
        }
    
}

function findAverageScore(score) {
    let total = 0
    score.forEach(number => {
        total += number
    });
    return total / score.length
}

console.log(calculateGrade([80, 95, 90, 70, 100]));


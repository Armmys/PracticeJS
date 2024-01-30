// 14. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions
// Instruction:
// - Given an array of objects, use destructuring to extract and display all properties from 
// each object.
// Initiate code:
// XXXXX is your code
const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Dave', age: 24 }
];

users.forEach(({id, name, age}) => {
    console.log(`User ID: ${id}, Name: ${name}, Age: ${age}`);
}
)

function des(s) {
    let dess = [];
    s.forEach(({ id, name, age }) => {
        dess.push(`User ID: ${id}, Name: ${name}, Age: ${age}`);
    });
    return dess;
}

console.log(des(users))
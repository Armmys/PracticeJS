// 10. // Arrays / Arrays Functions / Objects
// Instruction:
// - Display all the names of people objects (case-insensitive) that have the same name; 
// return an array of strings with the names that are the same.
// Initiate code:
// XXXXX is your code
function haveSameName() {
    const sameNamePeople = []

    people.forEach(person => {
        const peopleWithOutMe = people.filter(p => !(p.name === person.name && p.surname === person.surname))
        if (peopleWithOutMe.some(ps => ps.name.toLowerCase() === person.name.toLowerCase())) {
            if (!sameNamePeople.includes(person.name.toLowerCase())) {
                sameNamePeople.push(person.name.toLowerCase())
            }
        }
    })
    return sameNamePeople
}

let people = [
 { name: "John", surname: "Doe" },
 { name: "olivia", surname: "Smith" },
 { name: "john", surname: "Johnson" },
 { name: "Sarah", surname: "Wilson" },
 { name: "David", surname: "Brown" },
 { name: "Emily", surname: "Davis" },
 { name: "David", surname: "Miller" },
 { name: "Olivia", surname: "Taylor" },
 { name: "david", surname: "Anderson" },
 { name: "Sophia", surname: "Clark" }
];
let result = haveSameName(people)
console.log(result); // ["john", "olivia", "david"]


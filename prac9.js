// 10. // Arrays / Arrays Functions / Objects
// Instruction:
// - Display all the names of people objects (case-insensitive) that have the same name; 
// return an array of strings with the names that are the same.
// Initiate code:
// XXXXX is your code
function XXXXX(same){
    
    let person = {}

    for (let sameName of same) {
        let caseInSen = sameName.name.tolowerCase()
    }
    
    // if(same.name.toLowerCase() === same.name.toLowerCase()){
    //     same.forEach(name => {
    //         return name;
    //     });
    // }else {
    //     console.log('no one have the same name')
    // }
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
let result = XXXXX(people)
console.log(result); // ["john", "olivia", "david"]

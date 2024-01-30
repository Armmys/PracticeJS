const arr = [1, 2, 3];
arr.push(4); // XXXXX
arr = [1, 2, 3, 4]; // ติด error เพราะตั้งค่าตัว arr เป็น const 
const obj = { name: 'Alice' };
obj.age = 30; // XXXXX
obj = { name: 'Alice', age: 30 }; // ติด error เพราะตั้งค่าตัว obj เป็น const 

console.log(arr)
console.log(obj)
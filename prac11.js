// 12.// Functions / Arrays / Arrays Functions
// Instruction:
// - Write a function uniqueElements(arrayValue) to return array of the unique elements 
// from an array.
// Initiate code:
let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here
// function uniqueElements(array){
// let uniqueSet = new Set(array);

//   // แปลง Set กลับเป็นอาร์เรย์
//   let uniqueArray = [...uniqueSet];

//   return uniqueArray;
// }

function uniqueElements(arrayValue) {
    let uniqueSet = []

    arrayValue.forEach(num => {
        if (!uniqueSet.includes(num)) {   //ที่ใส่เครื่องหมาย ! ไว้ข่้างหน้าเพราะว่าตอนแรกเรากำหนด array ว่างมา และ เราใช้ foreach ลูปมันทีละตัวและเช็คไปทีละตัวว่าค่านี้มันมีอยู่ใน array 
            uniqueSet.push(num)            //รึยังซึ่งตอนแรกมันยังไม่มีก็เพิ่มเข้าไปซึ่งตัวถัดมาคือ 1 เหมือนกันและเครื่องหมาย ! ก็คือเช็คว่าถ้ายังไม่มีในตัว array ที่เราสร้างขึ้นมาให้เพิ่มเข้าไปแต่ในที่นี้คือมีแล้วเลยไม่เพิ่มซ้ำ
        }
    });

    return uniqueSet;
}

console.log(uniqueElements(numbers))
// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]
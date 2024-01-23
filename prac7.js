// 8. // Expressions, Operators, and Control Structures
// Instruction:
// - No coding, What is the result of the code below, and why is it displayed?
// Initiate code: 
// XXXXX : What is you think about result
if(1){
console.log(1); // 1 default
}
if([]){
console.log([]);// []
}
if(""){
console.log("");// XXXXX
}
if(null){
console.log(null); // XXXXX
}
if(undefined){
console.log(undefined); // XXXXX
}

// if (1): เงื่อนไขที่นี่คือตัวเลข 1 ใน JavaScript ตัวเลขที่ไม่เป็นศูนย์ถือว่าเป็นค่าที่เป็นจริง (truthy) ดังนั้น โค้ดภายในส่วนที่ใช้ console.log(1) จะถูกทำงาน และจะแสดงผลลัพธ์เป็น 1 ที่อยู่ในคอนโซล (console)。

// if ([]): เงื่อนไขที่นี่คืออาเรย์ว่าง ([]) ใน JavaScript อาเรย์ที่ว่างถือว่าเป็นค่าที่เป็นจริง (truthy) ดังนั้น โค้ดภายในส่วนที่ใช้ console.log([]) จะถูกทำงาน และจะแสดงผลลัพธ์เป็นอาเรย์ว่างที่อยู่ในคอนโซล。

// if (""): เงื่อนไขที่นี่คือสตริงว่าง ("") ใน JavaScript สตริงว่างถือว่าเป็นค่าที่เป็นเท็จ (falsy) ดังนั้น โค้ดภายในส่วนที่ใช้ console.log("") จะไม่ถูกทำงาน และจะไม่มีข้อความไหนถูกแสดงในคอนโซล。

// if (null): เงื่อนไขที่นี่คือค่า null ใน JavaScript null ถือว่าเป็นค่าที่เป็นเท็จ (falsy) ดังนั้น โค้ดภายในส่วนที่ใช้ console.log(null) จะไม่ถูกทำงาน และจะไม่มีข้อความไหนถูกแสดงในคอนโซล。

// if (undefined): เงื่อนไขที่นี่คือค่า undefined ใน JavaScript undefined ถือว่าเป็นค่าที่เป็นเท็จ (falsy) ดังนั้น โค้ดภายในส่วนที่ใช้ console.log(undefined) จะไม่ถูกทำงาน และจะไม่มีข้อความไหนถูกแสดงในคอนโซล。
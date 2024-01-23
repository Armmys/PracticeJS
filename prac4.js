// 5. // Types, Values, and Variables/ Arrays
// Instruction:
// - Write code to display only the object elements in the mixedArray.
// Initiate code: 
let mixedArray = [42, "hello", { name: 'Joe', surname: 'Doe' }, true, 56, false, { name: 'John', surname: 'Smith' }, { name: 'Joy', surname: 'Stein' }, { name: 'Jane', surname: 'Smith' }];


function checkObj(obj) {
    let onlyobj = obj.filter(item => typeof item === 'object')
    onlyobj.forEach(obje => {
        console.log(obje)
    });
}

checkObj(mixedArray)
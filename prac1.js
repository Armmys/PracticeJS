function allNums(nums){
    let sum = 0
    nums.forEach(num1 => {
        sum += num1
    });
    let avg = sum/nums.length
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    return {sum, avg, max, min}
}

console.log(allNums([1,2,3,4,5,6,-5]))
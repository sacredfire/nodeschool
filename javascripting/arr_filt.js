nums = [];

for (var i = 1; i < 11; i++) {
    nums.push(i);
}

function enevNums (number) {
    return number % 2 === 0;
}

nums = nums.filter(enevNums);

console.log(nums);

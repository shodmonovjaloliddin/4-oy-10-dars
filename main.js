// const isBoolean = (a, b, c) => {
//     return - a, b
// } 
// const i = isBoolean (5,2,3);
// console.log(i);

// const revert = (array) => {
//     let newArr = [];
//     for (let i = 0; i < array.lenght; i++) {
//         if (array[i])
//     }
//     return newArr;
// };

// const result = revert ([1, 2, 3, -4, -5, -6, 7]);
// const result1 = revert ([1, 2, 3, -5, -8]);

// console.log(result);
// console.log(result1);

// 1. getAvarage([1,2,3]) => 2
function getAvarage(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return Math.floor(sum / arr.length);
}
console.log(getAvarage([1, 2, 3])); // 2

// 2. invert([1,2,3]) => [-1,-2,-3]
function invert(arr) {
    return arr.map(num => -num);
}
console.log(invert([1, 2, 3])); // [-1,-2,-3]

// 3. getBonus(500, true) => 5000
function getBonus(salary, isBonus) {
    return isBonus ? salary * 10 : salary;
}
console.log(getBonus(500, true)); // 5000
console.log(getBonus(1000, false)); // 1000

// 4. solution("drow") => "word"
function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution("drow")); // "word"

// 5. enough(10, 5, 5) => 0
function enough(cap, on, wait) {
    return Math.max(0, on + wait - cap);
}
console.log(enough(10, 5, 5)); // 0
console.log(enough(12, 5, 10)); // 3


// 7. position("a") => 1
function position(letter) {
    return letter.toLowerCase().charCodeAt(0) - 96;
}
console.log(position("a")); // 1
console.log(position("z")); // 26
console.log(position("e")); // 5

var num = 54321
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log(reversedNum(num))
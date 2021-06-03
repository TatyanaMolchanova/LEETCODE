// Algorithm
// 1. make a string, split, reverse, join

var reverse = function(x) {
   

    const res = +(Math.abs(x).toString().split('').reverse().join(''));

    if (res > 0x7FFFFFFF) return 0;

    return x < 0 ? -res : res;

};

console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))








// var reverse = function(x) {
//     if (x > 0x7FFFFFFF) return 0;

//     if (x < 0) {
//         const xModule = Math.abs(x);
//         return +(xModule.toString().split('').reverse().join('')) * -1;
//     } else {
//         return +(x.toString().split('').reverse().join(''))
//     }
// };
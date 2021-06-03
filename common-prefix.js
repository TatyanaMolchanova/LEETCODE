var longestCommonPrefix = function(strs) {

    if (strs.length == 1) return strs.join('');

    let keys = {};

    strs.map((word, index) => {
        word.split('').map((letter, idx) => {
            if (strs[index  + 1] !== undefined && strs[index][idx] === strs[index + 1][idx]) {

                console.log('strs[index][idx]', strs[index][idx], index, idx);

                if (idx + 1 > 1) {
                    keys[strs[index][idx]] = (keys[strs[index][idx]] + 1) || 1;
                }
                
            }
        })
    })

    let prefix = Object.keys(keys).filter(elem => keys[elem] === strs.length - 1 ).join('');

    return prefix;
};

// console.log('longestCommonPrefix(["flower","flow","flight"])', longestCommonPrefix(["flower","flow","flight"]));
console.log('longestCommonPrefix(["cir","car"])', longestCommonPrefix(["cir","car"]));
// console.log('longestCommonPrefix(["a"])', longestCommonPrefix(["a"]));



// https://leetcode.com/problems/longest-common-prefix/solution/







// var longestCommonPrefix = function(strs) {
//     let keys = {}

//     for (let i = 0; i < strs.length; i++) {
//         for (let j = 0; j < strs[i].length; j++) {
//             if (strs[i + 1] !== undefined && strs[i][j] == strs[i + 1][j]) {
//                 keys[strs[i][j]] = (keys[strs[i][j]] + 1) || 1;
//             }
//         }
//     }

//     let prefix = Object.keys(keys).filter(elem => keys[elem] === 2).join('');

//     return prefix
// };

// console.log('longestCommonPrefix(["flower","flow","flight"])', longestCommonPrefix(["flower","flow","flight"]));








// var longestCommonPrefix = function(strs) {
//     console.log('strs', typeof strs);
//     // let prefix = [];
//     let key = {}

//     for (let i = 0; i < strs.length; i++) {
//         // console.log('strs[i]', strs[i]);

//         for (let j = 0; j < strs[i].length; j++) {
//             // console.log('strs[i][j]', strs[i][j])

//             // if (strs[i + 1] !== undefined) {
//             //     console.log('not undefined')

//                 if (strs[i + 1] !== undefined && strs[i][j] == strs[i + 1][j]) {
//                     // console.log('equal ', strs[i][j])

//                     // let key = strs[i][j];

//                     key[strs[i][j]] = (key[strs[i][j]] + 1) || 1;

//                     // prefix.push(strs[i][j])
//                 }
//             // }

//             // if (strs[i][j] == strs[i + 1][j]) {
//             //     console.log('equal ', strs[i][j])
//             // }

//         }
//     }

//     console.log('key', key);

//     // let key = Object.keys(prefix);
//     let prefix = Object.keys(key).filter(elem => key[elem] === 2).join('');

//     console.log('prefix', prefix);

//     // strs.map(item => {console.log('item', item)})
//     // strs.map((item, index) => {
//     //     console.log('item.split', item.split(''))

//     //     console.log('item[index]', item[index]);

//     //     // for (let i = 0; i < item.length - 1; i++) {

//     //     // }
//     // })

//     // console.log('str'), strs.map(item => {console.log('item', item)})
// };

// console.log('longestCommonPrefix(["flower","flow","flight"])', longestCommonPrefix(["flower","flow","flight"]));
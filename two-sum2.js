var twoSum = function(nums, target) {

    const arrNums = [];
    const arrIndexes = [];

    for (let i = 0; i < nums.length; i++) {
         if (arrNums[nums[i]] != null) {
            let index = arrNums[nums[i]];
            arrIndexes[0] = index;
            arrIndexes[1] = i;
        } else {
            arrNums[target - nums[i]] = i
        }
    }

    return arrIndexes;
  
    
    
};

console.log('twoSum([2,7,11,15], 9)', twoSum([2,7,11,15], 9));









// var twoSum = function(nums, target) {

//     const arrNums = [];
//     const arrIndexes = [];

//     for (let i = 0; i < nums.length; i++) {

//          if (arrNums[nums[i]] != null) {
//             let index = arrNums[nums[i]];
//             console.log('2 i', i);
//             console.log('nums[i]', nums[i]);
//             console.log('index', index);

//             arrIndexes[0] = index;
//             arrIndexes[1] = i;
//             console.log(' arrIndexes[0]',  arrIndexes[0]);
//             console.log(' arrIndexes[1]',  arrIndexes[1]);


//         } else {
//             console.log('i', i);
//             arrNums[target - nums[i]] = i
//         }


//         console.log('target - nums[i]', target - nums[i]);
//         console.log('arrNums[target - nums[i]]', arrNums[target - nums[i]]);
//     }

//     return arrIndexes;
  
    
    
// };
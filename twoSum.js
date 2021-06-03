var twoSum = function(nums, target) {

    const map = [];
    const indexnum = [];

    for (var i = 0; i < nums.length; i++) {

        console.log('nums[i]', nums[i])
        console.log('map[nums[i]]', map[nums[i]])
        if (map[nums[i]] != null) {
            console.log('2 map[nums[i]]', map[nums[i]])
            console.log('2 i', i)
            var index = map[nums[i]];
            indexnum[0] = index;
            indexnum[1] = i;
            break;
        } else {
            map[target - nums[i]] = i;
            console.log('i', i)
            console.log('map[target - nums[i]]', map[target - nums[i]])
        }
    }
    return indexnum;
};

twoSum([2,7,11,15], 9)

console.log('twoSum([2,7,11,15], 9)', twoSum([2,7,11,15], 9));
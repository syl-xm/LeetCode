/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort();
    let len = nums.length;
    let duplicate = 0;
    for (let i = 0; i < len - duplicate;) {
        if (nums[i] === val) {
            duplicate ++;
            if (nums[len - duplicate] !== val) {
                let tmp = nums[i];
                nums[i] = nums[len - duplicate];
                nums[len - duplicate] = tmp
                i ++
            }
        } else {
            i ++
        }
    }
    return len - duplicate
};
removeElement([0,1,2,2,3,0,4,2], 2);
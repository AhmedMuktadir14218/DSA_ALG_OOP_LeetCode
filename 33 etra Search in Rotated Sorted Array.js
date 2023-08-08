/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1
	
	// Just imagine this is a normal binary search
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
		
		// we normally look into the left half when nums[mid] > target
        if (nums[mid] > target) {
            // we will only look into the right half if the left half is ascending and first element > target
			// e.g. 4 5 6 7 1 2, mid = 2, target = 1
            if (nums[0] <= nums[mid] && nums[0] > target) {
                start = mid + 1
            } else {
			    // examples:
			    // 4 5 6 7 1 2, mid = 2, target = 5
				// 7 1 2 4 5 6, mid = 2, target = 1
                end = mid - 1
            }
		// likewise, we usually only look into right half when nums[mid] < target
        } else if(nums[mid] < target) {
            // but we will look into the left half if the right half is ascending and last element < target
			// e.g. 7 1 2 4 5 6, mid = 2, target = 7
            if (nums[nums.length - 1] >= nums[mid] && nums[nums.length - 1] < target) {
                end = mid - 1
            } else {
			    // examples:
				// 6 7 1 2 4 5, mid = 2, target = 5
				// 2 4 5 6 7 1, mid  = 2, target = 6
                start = mid + 1
            }
        } else {
            return mid
        }
    }
    return -1
};

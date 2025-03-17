var containsDuplicate = function(nums) {
    for(let i=0; i < nums.length ; i++){
        for(let j=i + 1; j < nums.length ; j++){
            if(nums[i]===nums[j]){
                return true
            }
            
        }
    }
    return false
};

var containsDuplicate = function(nums) {
    let seen = new Set(); // Create an empty Set

    for (let num of nums) { 
        if (seen.has(num)) { // If num is already in the Set, it's a duplicate
            return true;
        }
        seen.add(num); // Add num to the Set
    }

    return false; // No duplicates found
};

nums = [0,1,0,3,12,0]
var moveZeroes = function(nums) {
  let fromIdx = 0, toIdx = 0;
  for (fromIdx; fromIdx < nums.length; fromIdx ++) {
    if (nums[fromIdx] !== 0) {
      nums[toIdx] = nums[fromIdx];
      toIdx ++;
    }
  }
  for (toIdx; toIdx < nums.length; toIdx ++)
    nums[toIdx] = 0;
    // let i=0;
    // let j=1;
    // while(j<nums.length){
    //     if(nums[i]===0 && nums[j] != 0){
    //         nums[i]=nums[j]
    //         nums[j]=0
    //         i++
    //     }
    //     if(nums[i]!=0){
    //         i++
    //     }
        
    //     j++
    // }
    
    
    
// nums = [0,1,0,3,12,0]

    // let j = 0
    // let k = 1
    // while (k < nums.length) {
    //     if (nums[j] === 0 && nums[k] !== 0) {
    //         nums[j] = nums[k]
    //         nums[k] = 0
    //         j++
    //     }
       
    //     if (nums[j] !== 0) {
    //         j++
    //     }
    //     k++
    //     //  console.log(nums,j,k)
    // }
    return nums

};
// console.log(moveZeroes(nums));
let fromIdx = 0, toIdx = 0;
  for (fromIdx; fromIdx < nums.length; fromIdx ++) {
    if (nums[fromIdx] !== 0) {
      nums[toIdx] = nums[fromIdx];
      toIdx ++;
    }
    
  }
  console.log(nums[toIdx] , nums[fromIdx]);
  for (toIdx; toIdx < nums.length; toIdx ++){
    nums[toIdx] = 0;
    }
    console.log(nums[toIdx] , nums[fromIdx]);
console.log(nums);
// let temp=nums[0]
// nums[0]=nums[1]
// nums[1]=temp
// console.log("x:",nums)
console.log("Welcome to Programiz!");

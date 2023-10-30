
// Linear Search
// checki Sum zero problem
// [-5,-4,-3,-2,-1,0,2,4,6,8]
// Complexity O(n)

const linearSumPairZero = (array)=>{

    let left =0;
    let right = array.length - 1
        while (left < right) {
            sum = array[left] + array[right]
            if (sum === 0) {
                return [array[left],array[right]]
            }
            else if (sum > 0){
                right --;
            }
            else{
                left ++;
            }
        
    }
}
const k= linearSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8]);
console.log(k)


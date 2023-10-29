// checki Sum zero problem
// [-5,-4,-3,-2,-1,0,2,4,6,8]

function getSumPairZero(array){
    console.log(typeof(array))
    for (let number of array) {
        // console.log(number)
        for (let j = 1; j < array.length; j++) {
            if (number + array[j] === 0) {
                return [number,array[j]]
            } 
            
        }
    }
}


const x = getSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8])
console.log(x);

let array=[-5,-4,-3,-2,-1,0,2,4,6,8]
console.log(array.length)
const getSumPairZero2 = (array) =>{
    for (let number of array) {
        // console.log(number)
        for (let j = 1; j < array.length; j++) {
            if (number + array[j] === 0) {
                return [number,array[j]]
            } 
            
        }
    }
}
const z= getSumPairZero2([-5,-4,-3,-2,-1,0,2,4,6,8]);
console.log(z)

// Linear Search
// checki Sum zero problem
// [-5,-4,-3,-2,-1,0,2,4,6,8]

const linearSumPairZero = (array)=>{

    let left =0;
    let right = array.length - 1
        while (left < right) {
            sum = array[left] + array[right]
            if (sum === 0) {
                return [array[left],array[right]]
            }
            else if (sum ){

            }
        
    }
}
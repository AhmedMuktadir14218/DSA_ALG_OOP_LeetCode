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

// let array=[-5,-4,-3,-2,-1,0,2,4,6,8]
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


// checki Sum zero problem
// [-5,-4,-3,-2,-1,0,2,4,6,8]

const sumpair = (array)=>{
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if (number) {
                
            }
        }
    }
}
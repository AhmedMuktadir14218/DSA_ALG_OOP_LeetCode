
//String Anagram
//"hello" -> "llehoo"
// Complexity O(n)
const Anagram = (str1,str2) =>{
    if (str1.length != str2.length) {
        return false
    }
    let counter = {}
    for(let i of str1){
        // counter[i] = (counter[i] || 0) +1
        counter[i] = (counter[i] || 0) +1
        // console.log(counter[i])
    }
    for(let j of str2){
        if (!counter[j]) {
            return false
        }
        counter[j]-=1
        console.log(counter[j])
        
    }
    return true
}

const strr = Anagram('hello','lleho')
console.log(strr)
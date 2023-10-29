/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let marged = [];

    for(let i=0; i <= word1.length + word2.length ; i++ ){
        marged.push(word1[i]);
        marged.push(word2[i]);
    }
    return marged.join("")

};

console.log(mergeAlternately('ace','bdf'));

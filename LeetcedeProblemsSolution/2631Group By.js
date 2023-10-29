/**
 * @param {Function} fn
 * @return {Array}
 */

Array.prototype.groupBy = function(fn) {
    // reduce method on the array (this) to build the grouped object
    return this.reduce((res, item) => {
    const key = fn(item);//fn function to calculate the key based on the current item
    if (!(key in res)) {
      res[key] = [];
    }
    // push the current item to the array for corresponding key in the result object.
    res[key].push(item);
    return res;
  }, {});// {} as the initial value for reduce (empty object)
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

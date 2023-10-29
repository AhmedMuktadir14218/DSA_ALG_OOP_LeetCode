/**
 * @param {Object} obj
 * @return {Object}
 */
function isFalsy(value) {
  return !value; // Converts value to a boolean and negates it
}

function compactObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter((value) => !isFalsy(value));
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const compactValue = compactObject(value);
    if (!isFalsy(compactValue)) {
      acc[key] = compactValue;
    }
    return acc;
  }, {});
}

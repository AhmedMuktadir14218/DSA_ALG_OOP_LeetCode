var timeLimit = function(fn, t) {
	return async function(...args) {
        return await Promise.race([
            new Promise(resolve => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
        ]);
    };
};

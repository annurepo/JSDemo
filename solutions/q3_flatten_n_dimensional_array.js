/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	let flattenedArray = null;
	if(Array.isArray(arr)) {
		flattenedArray = arr.reduce((flat, toFlatten) => {
			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	}
	return flattenedArray;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

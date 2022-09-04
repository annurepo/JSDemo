/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr, keyField) => {
	let convertedObj = null;
	if(Array.isArray(arr)) {
		convertedObj = Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})));
	}
	return convertedObj;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

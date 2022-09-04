/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
	let str = '';
	if(parseInt(height, 10)) {
		let length = 2 * height - 1;
		let mid = parseInt(length / 2, 10);
		let initialValue = 1;
		for (mid; mid >= 0; mid = mid - 1) {
			for(let i = mid; i >= 0; i = i - 1) {
				str = str + ' ';
			}
			for(let j = 1; j <= initialValue; j = j + 1) {
				str = str + '* ';
			}
			str = str + ' ';
			initialValue = initialValue + 1;
			str = str + '\n';
		}
	}
	return str;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

class Student {
	constructor(name, marksGrammer) {
		this._name = name;
		this._marksGrammer = marksGrammer;
	}
}

class Commerce extends Student {
	constructor(name, marksGrammer, marksAccounts) {
		super(name, marksGrammer);
		this._marksAccounts = marksAccounts;
	}

	getPercentage() {
		return `${(100 * (this._marksGrammer + this._marksAccounts) / 200)}%`;
	}
}

class Science extends Student {
	constructor(name, marksGrammer, marksPhysics) {
		super(name, marksGrammer);
		this._marksPhysics = marksPhysics;
	}

	getPercentage() {
		return `${(100 * (this._marksGrammer + this._marksPhysics) / 200)}%`;
	}
}

const commerceStudents = [];
for(let i = 0; i < 50; i = i + 1) {
	commerceStudents.push(new Commerce(`${i}_commerce`,
		Math.floor(Math.random() * 90 + 10), Math.floor(Math.random() * 90 + 10)));
}

const scienceStudents = [];
for(let i = 0; i < 50; i = i + 1) {
	scienceStudents.push(
		new Science(`${i}_science`,
			Math.floor(Math.random() * 90 + 10), Math.floor(Math.random() * 90 + 10)));
}

console.log(commerceStudents
	.map(s => Object.assign({}, s, { _percentage: s.getPercentage() }))
	.concat(scienceStudents
		.map(s => Object.assign({}, s, { _percentage: s.getPercentage() }))));

return commerceStudents
	.map(s => Object.assign({}, s, { _percentage: s.getPercentage() }))
	.concat(scienceStudents
		.map(s => Object.assign({}, s, { _percentage: s.getPercentage() })));
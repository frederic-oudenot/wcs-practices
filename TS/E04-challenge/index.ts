// interface User
interface User {
	name: string;
	age: number;
}

class Person {
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public tellMyName(): void {
		console.log(`I am ${this.name}`);
	}

	public tellMyAge(): void {
		console.log(`I am ${this.age} years old`);
	}

	public tellMyNameAndAge(): void {
		this.tellMyName();
		this.tellMyAge();
	}
}

const firstPerson = new Person("John", 40);
const secondPerson = new Person("Mary", 35);

// firstPerson.tellMyName();
// firstPerson.tellMyAge();

// secondPerson.tellMyName();
// secondPerson.tellMyAge();

firstPerson.tellMyNameAndAge();
secondPerson.tellMyNameAndAge();

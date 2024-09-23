// Function saying hello to someone
function hello(name: string) {
	console.log("Hello " + name);
}
const firstName = "bob";

// Call function with arg : firstName = "bob"
hello(firstName);

// Call function with arg : firstName = "bob" and add "marley" to string
hello(firstName + " marley");

// function concatenate 2 strings and returning one string
function concat(a: string, b: string) {
	return a + b;
}

// Call function with multiple strings
const wcs = concat("Wild", concat("Code", "School"));
// Display variable
console.log(wcs);

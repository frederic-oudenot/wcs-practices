// Declare and define three variables using a numerical value
const number1 = 2;
const number2 = 3;
const number3 = 1;

// Si les trois variables sont égales, affiche "Les trois variables sont identiques" dans la console
if (number1 === number2 && number2 === number3) {
	console.log("les trois variables sont identiques");
}

// Si seulement deux des variables sont égales, affiche "Deux des variables sont identiques" dans la console
else if (number1 === number2 && number2 !== number3 || number2 === number3 && number1 !== number3 || number1 === number3 && number1 !== number2) {
	console.log("Deux variables sont egales");
}
// Si les variables sont toutes différentes, affiche "toutes les variables sont différentes" dans la console
else {
	console.log("Toutes variables sont differentes");
}

// prompt the user to enter the weight of chicken in grams 
var weightInGrams = prompt("Enter the weight of chicken (in grams):");
// convert weight into kg 
var WeightInKg = weightInGrams / 1000;

var price = WeightInKg * 500; 
// price per kg is 500
document.write("You have to pay"+ price +"rupees for"+ weightInGrams +"grams for chicken")
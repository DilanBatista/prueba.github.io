//Conversion larga:
var celsius1 = promt("Introduzca la temperatura en grados celsius:");
celsius1 = parseFloat(celsius1);

//Conversion corta:
//var celsius1 = parseFloat(promt("Introduzca la temperatura en grados celsius: "));

//Procedos a hacer la conversion de celsius a Fahrenhait:
var Fahrenhait = 9/5*celsius1 + 32;

document.write("De Celsius a Fahrenhait es:", Fahrenhait);

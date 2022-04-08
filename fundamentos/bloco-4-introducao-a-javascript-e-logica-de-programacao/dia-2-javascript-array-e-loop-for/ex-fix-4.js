let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;
var mediaAritmetica = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
    mediaAritmetica = (soma / numbers.length)
    
}

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

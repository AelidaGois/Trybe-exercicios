let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;
var mediaAritmetica = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
    mediaAritmetica = (soma / numbers.length)
}
console.log(mediaAritmetica);
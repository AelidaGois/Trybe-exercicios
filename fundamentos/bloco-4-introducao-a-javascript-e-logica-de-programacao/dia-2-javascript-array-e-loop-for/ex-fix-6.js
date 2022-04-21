let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];
let cont = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        impar.push(numbers[index]);
        cont++;
        

    } else if (numbers % 2 === 0) {
        console.log("nenhum valor ímpar encontrado");
    }

} console.log("Números ímpares: " + impar + " Quantidade de números ímpares: " + cont);


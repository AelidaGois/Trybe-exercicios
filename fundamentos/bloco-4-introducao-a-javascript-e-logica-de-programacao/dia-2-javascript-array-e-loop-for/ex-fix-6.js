// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];
let cont = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        impar.push(numbers[index]);
        cont++;
    }
}

if (impar.length === 0) {
    console.log("nenhum valor ímpar encontrado");

  }else{
    console.log("Números ímpares: " + impar + " Quantidade de números ímpares: " + cont);
  }  


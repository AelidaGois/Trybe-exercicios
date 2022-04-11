// fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultado = fatorial;

for (let i = 1; i < fatorial; i++){
 resultado *= i;
}

console.log(resultado);
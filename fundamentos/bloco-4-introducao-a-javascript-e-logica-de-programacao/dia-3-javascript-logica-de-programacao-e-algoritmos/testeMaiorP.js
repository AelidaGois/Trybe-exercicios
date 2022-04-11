let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];


for (let index = 0; index < array.length; index++){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
    if(array[index].length < menorPalavra.length)
        menorPalavra = array[index];
    }

console.log("A maior palavra é: " + maiorPalavra);
console.log("A menor palavra é: " + menorPalavra);




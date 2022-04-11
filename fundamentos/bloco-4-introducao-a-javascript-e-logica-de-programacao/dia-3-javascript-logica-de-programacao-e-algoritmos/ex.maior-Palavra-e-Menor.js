let array = ['java', 'javascript', 'python', 'html', 'css'];

// let array2 = [1,2,3,4,5];
let maiorPalavra = "";
let menorPalavra = "";

for (let index = 0; index < array.length; index++) {
if (maiorPalavra.length < array[index].length){
console.log(maiorPalavra);
}
if(menorPalavra.length > array[index].length){
    console.log(menorPalavra);  
}
}


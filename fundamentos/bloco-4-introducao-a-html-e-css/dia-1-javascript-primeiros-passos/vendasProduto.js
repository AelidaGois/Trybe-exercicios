const custoProduto = 30;
const valorDeVendaUnitario = 100;
const vendaTotal = valorDeVendaUnitario * 1000;
const imposto = 0.2;
const custoTotal = ((custoProduto * vendaTotal)* imposto) + custoTotal;
const lucroTotal = vendaTotal - custoTotal;


console.log("O valor total de venda é de: " + vendaTotal);
console.log("O custo total é de: " + custoTotal);
console.log("O seu lucro total é de: " + lucroTotal);







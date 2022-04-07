let xadrez = "abacaxi";


if(xadrez.toLowerCase() === "torre"){
console.log("movimenta-se em direção reta pelas colunas ou fileiras")
}else if(xadrez.toLowerCase() === "rei"){
    console.log("move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
    }else if(xadrez.toLowerCase() === "dama" || xadrez.toLowerCase()  === "rainha"){
        console.log(" Pode mover-se pelas colunas, fileiras e diagonal de outra cor.");
        }else if(xadrez.toLowerCase() === "cavalo"){
            console.log("movimenta-se sempre em L,ou seja,duas casas para frente e uma para a esquerda ou direita.");
            }else if(xadrez.toLowerCase() === "peão"){
                console.log("movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.");
            }else {
                console.log("Não é uma peça de xadrez! Informe [peão /torre/ rei/ dama/ rainha]")
            }


    
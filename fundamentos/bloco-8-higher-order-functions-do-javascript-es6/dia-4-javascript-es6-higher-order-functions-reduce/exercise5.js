const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
//5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
    return names.reduce((accInicial, elementoAtual) => {
        for (let letra of elementoAtual.toLowerCase()) {
            if (letra === 'a') {
                accInicial += 1;
            }
        }
        return accInicial;

    }, 0)


} console.log(containsA());
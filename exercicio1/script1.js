// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:


function imprimirComidasFavoritas (){
    const nome = prompt(`Qual seu nome?`);
    const comidaUm = prompt(`Qual sua primeira comida favorita?`);
    const comidaDois = prompt(`Qual sua segunda comida favorita?`);
    const comidaTres = prompt(`Qual sua terceira comida favorita?`);
    console.log(`Estas são as comidas favoritas de ${nome}: \n-${comidaUm} \n-${comidaDois}\n-${comidaTres} `);

}

console.log(imprimirComidasFavoritas())



// Estas são as comidas favoritas de nomeDoUsuario:
// - Comida1
// - Comida2
// - Comida3
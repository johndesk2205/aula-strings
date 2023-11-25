// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(frase)

// b) Implemente uma função que recebe por parâmetro a `const` criada no passo **a)**  e imprima essa string trocando **verde** por **rosa**, e **azul** por **laranja**;

function cores(string){
    const cor = string.replace("verde", "rosa")
    const final = cor.replace("azul", "laranja");
    console.log(final)
    console.log(final.includes("verde"))
    console.log(final.includes("laranja"))
    const fraseMaiusc = final.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
    console.log(fraseMaiusc);
}
cores(frase)

// c) **Verifique** se a nova string contém as palavras **verde** e **laranja**.

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

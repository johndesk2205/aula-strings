// Observe a string abaixo:
// A partir dela, execute os passos abaixo:
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
;

// a) crie uma função que recebe **minhaString** por parâmetro e **Remova** o excesso de espaços no final da string;

function fala(minhaString){
    console.log(minhaString.trim())
    const depoisTrim = minhaString.trim()
    console.log(minhaString.length)
    console.log(depoisTrim.length)
    console.log(depoisTrim.replace("________", "sticioso"))
}

fala(minhaString);

// b) A função deve imprimir no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;



// c) A função também deve **Substituir** os traços `________` pela palavra “sticioso”.
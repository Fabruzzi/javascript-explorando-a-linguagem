console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos =  new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //adiciona um item na lista.

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //remove um elemento, sendo o primeiro número a posição e o segundo número a quantidade de elementos
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //mostra apenas o elemento selecionado pelo [].










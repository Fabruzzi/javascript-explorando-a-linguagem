console.log(`Trabalhando com condicionais`);
const listaDeDestinos =  new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = false;
temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); // removendo item
// }else{
//     //A pessoa é menor de idade.
//     if(estaAcompanhada) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); // removendo item
//     }else{
//         console.log("Comprador menor de idade e não posso vender");
//     }   
// }


if(idadeComprador >= 18 || estaAcompanhada == true) {
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(1,1); // removendo item
    }else if(estaAcompanhada) {
            console.log("Comprador está acompanhado");
            listaDeDestinos.splice(1,1); // removendo item
        }else{
            console.log("Comprador menor de idade e não posso vender");
        }
        
console.log("Embarque:\n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viajem!!");
}else{
    console.log("Você não pode embarcar");
}
    

console.log(listaDeDestinos);













// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);


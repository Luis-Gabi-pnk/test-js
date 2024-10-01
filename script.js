//decllaração de variavel
let texto = prompt("Digite seu nome:");
let caixaTexto = document.getElementById('caixa');
const btnTrocaCor = document.getElementById('trocaCor');
const btnTrocaTexto = document.getElementById('trocaTexto');


document.getElementById("titulo").innerHTML = "meu nome é " + texto;

//evento de clique
btnTrocaCor.addEventListener("click", () => {


    //valida o nome da cor
    if( caixaTexto.className === "verde" ){
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove('verde');
    }else{
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('amarelo');
    }
    //exibe no console
    console.log(caixaTexto.className);
});
// troca texto
btnTrocaTexto.addEventListener("click", () => {
    if( caixaTexto.innerText === "maça"){
        document.getElementById("caixa").innerHTML = "Abacate";
}else{
    document.getElementById("caixa").innerHTML = "maça";
}
});

//soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").Value;
    let numero2 = document.getElementById("numero2").Value;
})
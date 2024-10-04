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
        caixaTexto.classList.add('vermelho');
        caixaTexto.classList.remove('verde');
    }else{
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('vermelho');
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
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
});

const btnBolinhas  = document.getElementById("addBolinhas");
let total = 0;
let bolinhas ="";
let bola = '<div class="bolinha"></div>';
 
btnBolinhas.addEventListener("click", () => {
total = total + 1;
bolinhas="";
for (let index = 0; index < total; index++){
bolinhas = bolinhas + bola;
 
}
document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
 
 
});
//localiza
const btnLocalizar = document.getElementById("localiza")
btnLocalizar.addEventListener("click", () => {
    function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log( "Latitude: " + latitude + "longitude: " + longitude);
    } 
    let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});

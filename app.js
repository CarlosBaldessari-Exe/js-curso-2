let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio';

function verificarChute() {
  console.log('O botao foi clicado');
}
 function estados (){
    const city = prompt ("Digite o nome do seu estado e da sua cidade");
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)   //{FORMA CORRECTA}
     //  if (city) {       Esta es mi forma 
  //    alert (`Estive em ${city} e lembrei de voce`);
    //}
 }
function exibirAlerta ()  {
    alert ('Eu Amo Js');
}
function somandoDoisNumeros () {
    let numero1 = prompt ("Digite um numero entero");
    let numero2 = prompt ("Digite um numero entero");
    let soma = numero1 + numero2;
    alert (`${numero1} + ${numero2} = ${soma}`);
    }
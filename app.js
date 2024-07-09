let titulo = document.querySelector('h1');

titulo.innerHTML = 'Jogo do numero secreto';


let paragrafoinnerHTML = 'Hora do desafio';

function verificarChute() {
  console.log('El boton fue cliqueado');
  alert ('Eu Amo Js');
  let numero1 = prompt ("Digite um numero entero");
  let numero2 = prompt ("Digite um numero entero");
  let soma = numero1 + numero2;
  alert (soma);

} function estados (){
    const city = prompt ("Digite o nome do seu estado e da sua cidade");
    if (city) {
        alert (`Estive em ${city} e lembrei de voce`);
    }
}
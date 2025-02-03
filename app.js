let listaDeNumerosSorteados = [];
let tentativas = 1;
let  numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Bem-Vindo ao Jogo');
    exibirTextoNaTela('p',' Escolha um número de 1 a 10');
}
exibirMensagemInicial();
function chute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas':'tentativa';
        exibirTextoNaTela('p', `Você descobriu! Com ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('h1','Hummm...não me parece certo');
        exibirTextoNaTela('p', 'O número escolhido é maior do que o número secreto');
    } else{
        exibirTextoNaTela('h1','Hummm...não me parece certo');
        exibirTextoNaTela('p', 'O número escolhido é menor do que o número secreto');
    }
    tentativas++
    limparCampo();
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElmentosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElmentosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
 function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
 }
 function novo_jogo(){
  gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;  
  exibirMensagemInicial();
 }
 console.log(numeroSecreto);
 console.log(listaDeNumerosSorteados);


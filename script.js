// Inicializa a variável "count" com o valor 1 para rastrear a imagem atual.
let count = 1;

// Define o botão de opção (radio) com o ID 'radio1' como selecionado (checked).
document.getElementById('radio1').checked = true;

// Define um intervalo para chamar repetidamente a função "nextImage" a cada 3 segundos.
setInterval(function() {
    nextImage();
}, 3000);

// Declaração da função "nextImage" que será chamada para alternar as imagens.
function nextImage() {
    // Incrementa o valor de "count" para avançar para a próxima imagem.
    count++;

    // Verifica se o valor de "count" ultrapassou 3 (número de imagens disponíveis).
    // Se sim, redefine "count" para 1, reiniciando o ciclo de imagens.
    if (count > 3) {
        count = 1;
    }

    // Define o botão de opção (radio) com o ID correspondente a "count" como selecionado.
    document.getElementById('radio' + count).checked = true;
}

// Obtendo referências para os elementos HTML
var btnm = document.getElementById('medio'); // Botão para o ensino médio
var btnf = document.getElementById('fundamental'); // Botão para o ensino fundamental
var btni = document.getElementById('infantil'); // Botão para o ensino infantil
var selEns = document.getElementById('selecaoens'); // Elemento de seleção de ensino
var txtEns = document.querySelector('#selecaoens p'); // Parágrafo dentro do elemento de seleção

// Função para lidar com o clique no botão de ensino infantil
function btnInf() {
    if (selEns.style.width = '54.7vw') { // Verificando a largura do elemento de seleção
        selEns.style.width = '8vw'; // Definindo a largura do elemento de seleção
        btni.style.width = '54.7vw'; // Definindo a largura do botão de ensino infantil
        btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
        btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
        selEns.removeChild(txtEns)
    } else {
        btni.style.width = '54.7vw'; // Definindo a largura do botão de ensino infantil
        btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
        btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
        btni.innerText = 'ENSINO FUNDAMENTAL'
        
    }
}

// Função para lidar com o clique no botão de ensino fundamental
function btnFund() {
    selEns.style.width = '8vw'; // Definindo a largura do elemento de seleção
    btnf.style.width = '54.7vw'; // Definindo a largura do botão de ensino fundamental
    btni.style.width = '8vw'; // Redefinindo a largura do botão de ensino infantil
    btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
    selEns.removeChild(txtEns)
}

// Função para lidar com o clique no botão de ensino médio
function btnMed() {

    selEns.style.width = '8vw'; // Definindo a largura do elemento de seleção
    btnm.style.width = '54.7vw'; // Definindo a largura do botão de ensino médio
    btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
    btni.style.width = '8vw'; // Redefinindo a largura do botão de ensino infantil
    selEns.removeChild(txtEns)
}
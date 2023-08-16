
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
    } else {
        btni.style.width = '54.7vw'; // Definindo a largura do botão de ensino infantil
        btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
        btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
    }
}

// Função para lidar com o clique no botão de ensino fundamental
function btnFund() {
    selEns.style.width = '8vw'; // Definindo a largura do elemento de seleção
    btnf.style.width = '54.7vw'; // Definindo a largura do botão de ensino fundamental
    btni.style.width = '8vw'; // Redefinindo a largura do botão de ensino infantil
    btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
}

// Função para lidar com o clique no botão de ensino médio
function btnMed() {
    selEns.style.width = '8vw'; // Definindo a largura do elemento de seleção
    btnm.style.width = '54.7vw'; // Definindo a largura do botão de ensino médio
    btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
    btni.style.width = '8vw'; // Redefinindo a largura do botão de ensino infantil
}

// Função para lidar com o clique no botão de reset
function btnRst() {
    if (selEns.style.width = '8vw') { // Verificando a largura do elemento de seleção (CUIDADO: uso incorreto do operador de atribuição)
        selEns.style.width = '54.7vw'; // Definindo a largura do elemento de seleção
        btnm.style.width = '8vw'; // Redefinindo a largura do botão de ensino médio
        btnf.style.width = '8vw'; // Redefinindo a largura do botão de ensino fundamental
        btni.style.width = '8vw'; // Redefinindo a largura do botão de ensino infantil
    }
}

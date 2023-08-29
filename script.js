//CARROSSEL
// Inicializa a variável "count" com o valor 1 para rastrear a imagem atual.
let count = 1

// Define o botão de opção (radio) com o ID 'radio1' como selecionado (checked).
document.getElementById('radio1').checked = true

// Define um intervalo para chamar repetidamente a função "nextImage" a cada 3 segundos.
setInterval(function() {
    nextImage()
}, 3000)

// Declaração da função "nextImage" que será chamada para alternar as imagens.
function nextImage() {
    // Incrementa o valor de "count" para avançar para a próxima imagem.
    count++

    // Verifica se o valor de "count" ultrapassou 3 (número de imagens disponíveis).
    // Se sim, redefine "count" para 1, reiniciando o ciclo de imagens.
    if (count > 3) {
        count = 1
    }

    // Define o botão de opção (radio) com o ID correspondente a "count" como selecionado.
    document.getElementById('radio' + count).checked = true
}

//SELETOR DE ENSINO
// Obtendo referências para os elementos HTML
var btnm = document.getElementById('medio') 
var btnf = document.getElementById('fundamental') 
var btni = document.getElementById('infantil')
var selEns = document.getElementById('selecaoens') 
var txtEns = document.querySelector('#selecaoens p') 
var txti = document.querySelector('#infantil p')
var txtf = document.querySelector('#fundamental p')
var txtm = document.querySelector('#medio p')

// Função para lidar com o clique no botão de ensino infantil
function btnInf() {
    if (selEns.style.width = '54.7vw') { 
        btni.style.width = '54.7vw';
        txti.style.width = '54.7vw'
        txti.innerText = 'EDUCAÇÃO INFANTIL'
        btnf.style.width = '8vw'
        btnm.style.width = '8vw'
        txtEns.innerText = ''
        txtf.innerText = ''
        txtm.innerText = ''
        txtf.style.width = '8vw'
        txtm.style.width = '8vw'
        txtEns.style.width = '8vw'
        selEns.style.width = '8vw'
    }
}

// Função para lidar com o clique no botão de ensino fundamental
function btnFund() {
    btnf.style.width = '54.7vw'
    txtf.style.width = '54.7vw'
    txtf.innerText = 'ENSINO FUNDAMENTAL'
    btni.style.width = '8vw'
    btnm.style.width = '8vw'
    txtEns.innerText = ''
    txti.innerText = ''
    txtm.innerText = ''
    txti.style.width = '8vw'
    txtm.style.width = '8vw'
    txtEns.style.width = '8vw'
    selEns.style.width = '8vw'
}

// Função para lidar com o clique no botão de ensino médio
function btnMed() {
    btnm.style.width = '54.7vw'
    txtm.style.width = '54.7vw'
    txtm.innerText = 'ENSINO MEDIO'
    btni.style.width = '8vw'
    btnf.style.width = '8vw'
    txtEns.innerText = ''
    txti.innerText = ''
    txtf.innerText = ''
    txti.style.width = '8vw'
    txtf.style.width = '8vw'
    txtEns.style.width = '8vw'
    selEns.style.width = '8vw'
}

//Função para lidar com o clique de reset da seleção de ensino
function btnRst() {
    selEns.style.width = '54.7vw'
    txtEns.style.width = '54.7vw'
    txtEns.innerText = 'Clique nas cores para descobrir os níveis de ensino'
    btni.style.width = '8vw'
    btnf.style.width = '8vw'
    btnm.style.width = '8vw'
    txti.innerText = ''
    txtf.innerText = ''
    txtm.innerText = ''
}
// CARROSSEL 
// Inicializa a variável "count" com o valor 1 para rastrear a imagem atual.
let count = 1

// Define o botão de opção (radio) com o ID 'radio1' como selecionado (checked).
document.getElementById('radio1').checked = true

// Define um intervalo para chamar repetidamente a função "nextImage" a cada 3 segundos.
setInterval(function() {
    nextImage()
}, 5000)

function nextImage() {
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

//Obtendo tamanho da tela para media query
var screenSize = window.screen.width
var btnExpanded = '54.7vw'
var btnDefault = '8vw'

//Definindo qual o tamanho será aplicado nos botões
if (screenSize >= 1200) {
    btnExpanded = '31vw'
    btnDefault = '3vw' 
}

// Função para lidar com o clique no botão de ensino infantil
function btnInf() {
    if (selEns.style.width = btnExpanded) { 
        btni.style.width = btnExpanded
        txti.style.width = btnExpanded
        txti.innerText = 'EDUCAÇÃO INFANTIL'
        btnf.style.width = btnDefault
        btnm.style.width = btnDefault
        txtEns.innerText = ''
        txtf.innerText = ''
        txtm.innerText = ''
        txtf.style.width = btnDefault
        txtm.style.width = btnDefault
        txtEns.style.width = btnDefault
        selEns.style.width = btnDefault
    }
}

// Função para lidar com o clique no botão de ensino fundamental
function btnFund() {
    btnf.style.width = btnExpanded
    txtf.style.width = btnExpanded
    txtf.innerText = 'ENSINO FUNDAMENTAL'
    btni.style.width = btnDefault
    btnm.style.width = btnDefault
    txtEns.innerText = ''
    txti.innerText = ''
    txtm.innerText = ''
    txti.style.width = btnDefault
    txtm.style.width = btnDefault
    txtEns.style.width = btnDefault
    selEns.style.width = btnDefault
}

// Função para lidar com o clique no botão de ensino médio
function btnMed() {
    btnm.style.width = btnExpanded
    txtm.style.width = btnExpanded
    txtm.innerText = 'ENSINO MEDIO'
    btni.style.width = btnDefault
    btnf.style.width = btnDefault
    txtEns.innerText = ''
    txti.innerText = ''
    txtf.innerText = ''
    txti.style.width = btnDefault
    txtf.style.width = btnDefault
    txtEns.style.width = btnDefault
    selEns.style.width = btnDefault
}

//Função para lidar com o clique de reset da seleção de ensino
function btnRst() {
    selEns.style.width = btnExpanded
    txtEns.style.width = btnExpanded
    txtEns.innerText = 'Clique nas cores para descobrir os níveis de ensino'
    btni.style.width = btnDefault
    btnf.style.width = btnDefault
    btnm.style.width = btnDefault
    txti.innerText = ''
    txtf.innerText = ''
    txtm.innerText = ''
}

function toTopPage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

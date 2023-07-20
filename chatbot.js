//Get Elements
const myBtn = document.getElementsByClassName('myBtn')
const myBox = document.getElementById('myBox')
const txtres1 = document.getElementById('btn1')
const txtres2 = document.getElementById('btn2')

//Function do Icone de Chat
function abrir() {
    myBox.style.display = "block"
}

function fechar() {
    myBox.style.display = "none"
}

//Criação dos elementos do User
const userBox = document.createElement('div')
const userRes = document.createElement('div')
//
const txtResUser = document.createElement('p')
//
userBox.setAttribute('class', 'userBox')
userRes.setAttribute('class', 'userRes')

//Criação dos elementos do Bot
const botBox = document.createElement('div')
const botRes = document.createElement('div')
//
const txtResBot = document.createElement('p')
//
const btnRes1 = document.createElement('button')
const btnRes11 = document.createElement('button')
const btnRes2 = document.createElement('button')
//
const linkres1 = document.createElement('a')
const linkres11e2 = document.createElement('a')
//
botBox.setAttribute('class', 'botBox')
botRes.setAttribute('class', 'botRes')
//
linkres1.setAttribute('href', 'https://colegioegalite.com.br/site/')
linkres11e2.setAttribute('href', 'https://api.whatsapp.com/send/?phone=555133282900&text&type=phone_number&app_absent=0')
linkres1.setAttribute('target', '_blank')
linkres11e2.setAttribute('target', '_blank')
//
btnRes1.appendChild(linkres1)
btnRes11.appendChild(linkres11e2)
//
btnRes1.setAttribute('onclick', 'opc3()')
btnRes1.setAttribute('class', 'btncolors')
btnRes11.setAttribute('onclick', 'opc4()')
btnRes11.setAttribute('class', 'btncolors')
btnRes2.setAttribute('onclick', 'opc4()')
btnRes2.setAttribute('class', 'btncolors')

//Function Para Respostas
function opc1() {
    txtres1.remove()
    txtres2.remove()
    //Caixa do User
    myBox.appendChild(userBox)
    userBox.appendChild(userRes)
    userRes.appendChild(txtResUser)
    txtResUser.innerText = 'Dúvidas'
    //Caixa do Bot
    myBox.appendChild(botBox)
    botBox.appendChild(botRes)
    botRes.appendChild(txtResBot)
    txtResBot.innerText = 'Algumas de suas dúvidas podem ser retiradas em nosso site, o qual você será redirecionado clicando no primeiro botão abaixo, caso não tenha encontrado a resposta para sua dúvida, pedimos que entre em contato via WhatsApp, clicando no segundo botão abaixo:'
    //Botoes da res bot
    botBox.appendChild(btnRes1)
    botBox.appendChild(btnRes11)
    linkres1.innerText = 'Site'
    linkres11e2.innerText = 'Whatsapp'    
}

function opc2() {
    txtres1.remove()
    txtres2.remove()
    //Caixa do User
    myBox.appendChild(userBox)
    userBox.appendChild(userRes)
    userRes.appendChild(txtResUser)
    txtResUser.innerText = 'Atendente'
    //Caixa do Bot
    myBox.appendChild(botBox)
    botBox.appendChild(botRes)
    botRes.appendChild(txtResBot)
    txtResBot.innerText = 'Para entrar em contato diretamento com um de nossos atendentes clique no botão abaixo:'
    //Botoes da res bot
    botBox.appendChild(btnRes11)
    linkres11e2.innerText = 'Whatsapp'
}

////////////////////////////////////////////////////////PARTE DOIS////////////////////////////////////////////////////////////////////
const userBox2 = document.createElement('div')
const userRes2 = document.createElement('div')
const txtResUser2 = document.createElement('p')
//
userBox2.setAttribute('class', 'userBox')
userRes2.setAttribute('class', 'userRes')
//
const botBox2 = document.createElement('div')
const botRes2 = document.createElement('div')
const txtResBot2 = document.createElement('p')
//
botBox2.setAttribute('class', 'botBox')
botRes2.setAttribute('class', 'botRes')

//Function para respostas 2
function opc3() {
    btnRes1.remove()
    btnRes11.remove()
    //Caixa do User
    myBox.appendChild(userBox2)
    userBox2.appendChild(userRes2)
    userRes2.appendChild(txtResUser2)
    txtResUser2.innerText = 'Site'
    //Caixa do Bot
    myBox.appendChild(botBox2)
    botBox2.appendChild(botRes2)
    botRes2.appendChild(txtResBot2)
    txtResBot2.innerText = 'Encontrou o que procurava? Espero que sim, mas caso precise de mais ajuda, clique no X que está posicionado no meu canto superior esquerdo e volte aqui para escolher outras opções!'
}

function opc4() {
    btnRes1.remove()
    btnRes11.remove()
    btnRes2.remove()
    //Caixa do User
    myBox.appendChild(userBox2)
    userBox2.appendChild(userRes2)
    userRes2.appendChild(txtResUser2)
    txtResUser2.innerText = 'WhatsApp'
    //Caixa do Bot
    myBox.appendChild(botBox2)
    botBox2.appendChild(botRes2)
    botRes2.appendChild(txtResBot2)
    txtResBot2.innerText = 'Encontrou o que procurava? Espero que sim, mas caso precise de mais ajuda, clique no X que está posicionado no meu canto superior esquerdo e volte aqui para escolher outras opções!'
}
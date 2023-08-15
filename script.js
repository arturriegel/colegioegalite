var btnm = document.getElementById('medio')
var btnf = document.getElementById('fundamental')
var btni = document.getElementById('infantil')
var selEns = document.getElementById('selecaoens')

function btnInf() {
    if (selEns.style.display = 'none') {
    selEns.style.display = 'none'
    btni.style.width = '62.8vw'
    btnm.style.width = '8vw'
    btnf.style.width = '8vw'
    } else {
        btni.style.width = '62.8vw'
        btnm.style.width = '8vw'
        btnf.style.width = '8vw'
    }
}

function btnFund() {
    selEns.style.display = 'none'
    btnf.style.width = '62.8vw'
    btni.style.width = '8vw'
    btnm.style.width = '8vw'
}

function btnMed() {
    selEns.style.display = 'none'
    btnm.style.width = '62.8vw'
    btnf.style.width = '8vw'
    btni.style.width = '8vw'
}
function pageHome() {
    window.location = "./index.html"
}

function regis() {
    window.location = "./cadastroPessoal.html"
}

// Navbar Responsividade
function mostrarNav() {
    document.getElementById('nave').style.left = "0"
    document.getElementById('fe-nave').style.left = "47%"
}

function feNave() {
    
    document.getElementById('nave').style.left = "-110%"
    document.getElementById('fe-nave').style.left = "-70%"
}

var pagina = document.getElementById('section').style

var efeito2 = document.getElementById('be').classList
var efeito3 = document.getElementById('nome').classList

function inicio() {
    pagina.right = 0
    efeito2.remove('efeito2')
    efeito3.remove('efeito3')

}

function meio() {
    pagina.right = "100%"
    feNave()
    efeito2.add('efeito2')
    efeito3.remove('efeito3')
}
function fim() {
    pagina.right = "200%"
    feNave()
    efeito3.add('efeito3')
    efeito2.remove('efeito2')
}


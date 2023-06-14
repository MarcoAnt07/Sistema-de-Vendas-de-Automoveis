let titulo = localStorage.getItem('titulo');

document.getElementById('titulo').innerHTML = titulo

function vendas1(){
    window.location.href = 'vendas.html'
    let modelo = document.getElementById('modelo1')
    let textoLabel = modelo.textContent
    localStorage.setItem('modelo', textoLabel)
}

function vendas2(){
    window.location.href = 'vendas.html'
    let modelo = 'Renault Kwid'
    localStorage.setItem('modelo', modelo)
}

function vendas3(){
    window.location.href = 'vendas.html'
    let modelo = 'Fiat Mobi'
    localStorage.setItem('modelo', modelo)
}
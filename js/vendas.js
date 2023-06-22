let titulo = localStorage.getItem('modelo')

let modelo = localStorage.getItem('modelo')

document.getElementById('modelo').innerHTML = titulo

fetch('php/Clientes.php')
.then((res) => {
    return res.json()
})
.then((dados) => {
    let clientes = ''

    for(let i = 0; i < dados.length; i++){
        clientes += `<option value="${dados[i].Nome}">${dados[i].Nome}</option>`
    }
    document.getElementById('selectClientes').innerHTML = clientes
})
.catch((err) => {
    console.log(err)
})

fetch('php/Concessionaria.php')
.then((res) => {
    return res.json()
})
.then((dados) => {
    let concessionaria = ''

    for(let i = 0; i < dados.length; i++){
        concessionaria += `<option value="${dados[i].Nome}">${dados[i].Nome}</option>`
    }
    document.getElementById('selectConcessionaria').innerHTML = concessionaria
})
.catch((err) => {
    console.log(err)
})

function vendaRealizada(){
    alert('Venda Confirmada')
    window.location.href = 'http://localhost/Projeto%20SAEP/'
}
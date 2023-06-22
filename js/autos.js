let titulo = localStorage.getItem('titulo')
document.getElementById('titulo').innerHTML = titulo

let numAutos = []
let nomesAutos = []
let veiculos = []

fetch('php/Alocacao.php')
.then((res) => {
    return res.json()
})
.then((data) => {
    let area = localStorage.getItem('area')

    for(let i = 0; i < data.length; i++){
        if(data[i].Area == area && data[i].Quantidade != 0){
            numAutos.push(parseInt(data[i].Automovel))
            }
        }
    })

fetch("php/Automoveis.php")
.then((res) => {
    return res.json()
})
.then((data) => {
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < numAutos.length; j++){
            if(numAutos[j] == data[i].ID){
                nomesAutos.push(data[i].Modelo)

                veiculos.push(`${data[i].Modelo} | R$ ${data[i].Preco}`)
                }
            }
        }
    let cod = ''

    for(let i = 0; i < veiculos.length; i++){
        cod += `<label class="autos-modelo">${veiculos[i]}</label>` + `<button class="autos-btn" onclick="redirect(${numAutos[i]}, '${nomesAutos[i]}')">Vender</button>` + `<p>`
    }

    document.getElementById('autos-label').innerHTML = cod
})

function redirect(id, modelo){
    window.location.href = 'vendas.html'
    localStorage.setItem('id', id)
    localStorage.setItem('modelo', modelo)
}
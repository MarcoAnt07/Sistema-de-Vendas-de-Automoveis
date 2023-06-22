let titulo = localStorage.getItem('modelo')
let id = localStorage.getItem('id')
document.getElementById('modelo').innerHTML = titulo
let concessionariaId = ''

fetch('php/Clientes.php')
.then((res) => {
    return res.json()
})
.then((dados) => {
    let clientes = '<option disable selected></option>'

    for(let i = 0; i < dados.length; i++){
        clientes += `<option value="${dados[i].Nome}">${dados[i].Nome}</option>`
    }
    document.getElementById('selectClientes').innerHTML = clientes
})

fetch('php/Alocacao.php')
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
    console.log(id)

    for(let i = 0; i < data.length; i++){
        if(data[i].Automovel == id){
            concessionariaId = data[i].Concessionaria
        }
    }
    console.log(concessionariaId)
})

fetch('php/Concessionaria.php')
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)

    let concessionaria = '<option disable selected></option>'

    for(let  i = 0; i < data.length; i++){
        if(data[i].ID == concessionariaId){
            concessionaria += `<option value="${id}">${data[i].Nome}</option>`
        }
    }

    document.getElementById('selectConcessionaria').innerHTML = concessionaria

})
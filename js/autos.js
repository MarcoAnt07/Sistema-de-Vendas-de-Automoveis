let area1 = ['Fiat Toro', 'Toyota Corolla', 'Jeep Compass']
let preco1 = ['R$ 100.000,00', 'R$ 115.000,00', 'R$ 105.000,00']

let area3 = ['Fiat Uno', 'Chevrolet Onix', 'Hyudai HB20']
let preco3 = ['R$ 30.000,00', 'R$ 45.000,00', 'R$ 55.000,00']

let area5 = ['Fiat Mobi', 'Ford Fiesta', 'Toyota Hilux']
let preco5 = ['R$ 55.000,00', 'R$ 30.000,00', 'R$ 53.937,00']

let area6 = ['Volkswagen Saveiro', 'Toyota SW4', 'Honda WR-V']
let preco6 = ['R$ 32.306,00', 'R$ 54.252,00', 'R$ 35.139,00']

let titulo = localStorage.getItem('titulo');

let cod =''

document.getElementById('titulo').innerHTML = titulo

if(titulo == 'Área 1'){
    for(let i = 0; i < area1.length; i++){
        cod += '<label class="autos-modelo" id="modelo'+i+
        '">'+ area1[i] +'</label>'+'<label class="autos-modelo">| '
        + preco1[i]+'</label>' + 
        '<button class="autos-btn" onclick="vendas('+i+
        ')"> Vender </button>' + '<p>'
    }

    document.getElementById('autos-label').innerHTML = cod

} else if (titulo == 'Área 3'){
    for(let i = 0; i < area3.length; i++){
        cod += '<label class="autos-modelo" id="modelo'+i+'">'+ area3[i] +'</label>'+'<label class="autos-modelo">| '+ preco3[i]+'</label>' + '<button class="autos-btn" onclick="vendas('+i+')"> Vender </button>' + '<p>'
    }

    document.getElementById('autos-label').innerHTML = cod

} else if (titulo == 'Área 5'){
    for(let i = 0; i < area5.length; i++){
        cod += '<label class="autos-modelo" id="modelo'+i+'">'+ area5[i] +'</label>'+'<label class="autos-modelo">| '+ preco5[i]+'</label>' + '<button class="autos-btn" onclick="vendas('+i+')"> Vender </button>' + '<p>'
    }

    document.getElementById('autos-label').innerHTML = cod

} else if (titulo == 'Área 6'){
    for(let i = 0; i < area6.length; i++){
        cod += '<label class="autos-modelo" id="modelo'+i+'">'+ area6[i] +'</label>'+'<label class="autos-modelo">| '+ preco6[i]+'</label>' + '<button class="autos-btn" onclick="vendas('+i+')"> Vender </button>' + '<p>'
    }

    document.getElementById('autos-label').innerHTML = cod
}

function vendas(num){
    window.location.href = 'vendas.html'
    let modelo = document.getElementById(`modelo${num}`)
    localStorage.setItem('modelo', modelo.textContent)
}
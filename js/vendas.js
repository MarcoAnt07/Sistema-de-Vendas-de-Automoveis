let titulo = localStorage.getItem('modelo')

let modelo = localStorage.getItem('modelo')

let cliente1 = ['', 'Aa', 'Bb', 'Cc', 'Dd', 'Ee']
let cliente3 = ['', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj']
let cliente5 = ['', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo']
let cliente6 = ['', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt']

let area1 = ['Fiat Toro', 'Toyota Corolla', 'Jeep Compass']
let area3 = ['Fiat Uno', 'Chevrolet Onix', 'Hyudai HB20']
let area5 = ['Fiat Mobi', 'Ford Fiesta', 'Toyota Hilux']
let area6 = ['Volkswagen Saveiro', 'Toyota SW4', 'Honda WR-V']

let cod = ''

document.getElementById('modelo').innerHTML = titulo

for(let i = 0; i < area1.length; i++){
    if(area1[i] == titulo){
        for(let index = 0; index < cliente1.length; index++){
            cod += '<option value="">'+ cliente1[index] + '</option>'

        }
        document.getElementById('selectClientes').innerHTML = cod
    }
    else if(area3[i] == titulo){
        for(let index = 0; index < cliente3.length; index++){
            cod += '<option value="">'+ cliente3[index] + '</option>'

        }
        document.getElementById('selectClientes').innerHTML = cod
    }
    else if(area5[i] == titulo){
        for(let index = 0; index < cliente5.length; index++){
            cod += '<option value="">'+ cliente5[index] + '</option>'

        }
        document.getElementById('selectClientes').innerHTML = cod
    }
    else if(area6[i] == titulo){
        for(let index = 0; index < cliente6.length; index++){
            cod += '<option value="">'+ cliente6[index] + '</option>'

        }
        document.getElementById('selectClientes').innerHTML = cod
    }
}
function aviso(){
    alert('Área Indisponível')
}

fetch("php/Alocacao.php")
.then((res) => {
    return res.json()
})
.then((data) => {
    let areas = data.map(({Area}) => parseInt(Area))

    let codHtml = ''

    for(let i = 1; i < 7; i++){
        if(areas.includes(i)){
            codHtml += `<div class="area${i}" onclick="area(${i})" style="color: white; background-color: blue">${i}</div>`
        }
        else {
            codHtml += `<div class="area${i}" onclick="aviso()" style="background-color: white; color: black">${i}</div>`
        }
    }
        document.getElementById("principal").innerHTML = codHtml
})
.catch((err) => {
    console.log(err)
})

function area(local){
    window.location.href = 'autos.html'
    localStorage.setItem('titulo', `Área ${local}`)
    localStorage.setItem('area', local)
}
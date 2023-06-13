const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '',
    database: 'crudjs'
})

connection.connect((err) => {
    if (erro) {
        console.log('Erro ao conectar: ', err)
        return
    }
    console.log('conectado')
})

connection.end((err) => {
    if (erro){
        console.log('Erro ao encerrar a conexão: ', erro)
        return
    }
    console.log('Conexão encerrada')
})
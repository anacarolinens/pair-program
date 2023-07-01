const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url === '/')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 
        (err, content) => {
            res.end(content) //pegando todo conteudo e mandando para o servercd..
        })


}).listen(5000, ()=> {
   console.log('Servidor rodando...')
})

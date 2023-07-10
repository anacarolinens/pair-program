const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const file = (req.url === '/') ?'index.html': req.url
    //console.log(file)
    const pathFile = path.join(__dirname, 'public', file)
    const extname = path.extname(pathFile) // guardando o nome da extenção do cara que está sendo solocitado/ requisitando aquela chamada
    const allowedFileTypes = ['.html','.css','.js', '.png'] // cria um vetor com os finais que são aceitados

    const allowed = allowedFileTypes.find((item) => //metodo para verificar
        item == extname)

    if (!allowed) //quando falso retorna para não entrar na prox requisição
        return 

    fs.readFile(pathFile, 
        (err, content) => {
            if(err) throw err
            res.end(content) //pegando todo conteudo e mandando para o servercd.. sem ele o html, css e javascript não vai para a pagina
        })


}).listen(5000, ()=> {
   console.log('Servidor rodando...')
})

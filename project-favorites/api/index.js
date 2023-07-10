const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

    function writeFile(cb) { //carregando uma funcao
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err=> {
                if (err) throw err
                    cb('Operação realizada com sucesso!')//callback que aparece no message
            })
    }

http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
    
    //tratamento do cors
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
    

    if(!name || !url)
        return res.end(JSON.stringify(data))
    if(del){
        data.urls = data.urls.filter(item => item.url != url) //manipula dentro do objeto e depois manda pro documento Json
        return writeFile(message => res.end(message)
    )}
    data.urls.push({name, url})  
    return writeFile(message => res.end(message))







}).listen(3000, () => console.log('Api rodando...'))    
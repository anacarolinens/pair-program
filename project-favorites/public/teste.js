const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

   req.end('testetestetetste')

}).listen(3000, ()=> {
   console.log('Servidor rodando...')
})

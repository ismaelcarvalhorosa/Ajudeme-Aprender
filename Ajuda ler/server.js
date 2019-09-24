var http = require('http');
var fs = require('fs');

// cria o cervidor 
var server = http.createServer(function(req, res){
    // define o cabeçalho da resposta
    res.writeHead(200, {'content-type': 'text/html'});

    //serve o documento HTML
    fs.createReadSream('completo.html').pipe(res);
});

server.listen(300);

console.log('Servidor pronto :)');

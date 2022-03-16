// Import module HTTP
var http = require('http');
// Création d'une variable  server avec l'objet HTTP - function de requete/reponse
var server = http.createServer(function (req, res){
    // Permet de vérifier la requete en cours (URL)
    if(req.url == '/'){
        // Ecriture de la réponse (200)
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html></html>')
        res.end();
    }
    else if (req.url == "/classe"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html></html>')
        res.end();
    }
    else if (req.url == "/test"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html></html>')
        res.end();
    }
    else{
        res.end('mauvaise requete');
    }
});

server.listen(4020);
console.log('Bienvenue sur le site web version 1.0.1')

// Protocole : http  
// adresse : Localhost
// port : 5000
// netstat -ant // trouver les ports dispo
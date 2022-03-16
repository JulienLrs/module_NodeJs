var http = require ('http');
// Création de l'objet serveur + fonction req/res
http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type': 'text:html'});
// Fin du programme avec message
	res.end('Hello World !');
// Ajout du port et de l'adresse IP
	})
    .listen(8080,'192.168.1.1');
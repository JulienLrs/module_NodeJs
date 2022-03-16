// Simple serveur HTTP
// Import du module http
var http = require ('http');
// Création de l'objet serveur + fonction req/res
http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type': 'text:html'});
// Fin du programme avec message
	res.end('Hello World !');
// Ajout du port et de l'adresse IP
	}).listen(8080,'192.168.1.1');
// console.log('Bienvenu sur le serveur Http');


//decouverte port
//netstat -ant
//URL: http://
//IP: localhost
//Porte d entree : 5000
//http:localhost: 5000
//Loop back -boucle local
// adresse par la machine
// communique pas avec l'exterieur



//init
//install
//lancement
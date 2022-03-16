// Import des modules HTTP et filesystem(fs)
const http = require ('http');
const fs = require ('fs'); // lire/ecrire/manipuler
// Création du serveur (variable =app = obejt HTTP)
// Création de ma variable lecturevideo
const app = http.createServer((req, res) => {
        res.writeHead(200,{'Content-Type':'video/mp4'});
    const lecturevideo = fs.createReadStream('video/com.mp4');
    lecturevideo.pipe(res);

    });
app.listen(2177);
console.log('Lecture de la video');

//stdin     |
//stdout    |Traitement des erreurs d'entrée et de sortie
//stderr    |





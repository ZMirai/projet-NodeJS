module.exports = _ => {

    //On appele express
    const { response } = require('express');
    const express = require('express');
    const { engine } = require('express-handlebars');
    const router = require('./router.js');
    //const trimString = require('./app');
    
    

    //Initialisation d'express
    const app = express();

    

    // Parametrage d'engine
    app.engine('hbs', engine());
    app.engine('hbs', engine({ 
        defaultLayout: 'main', 
        extname: 'hbs',

        //Helpers handlebars
        helpers: {
            trimString: function(synopsis, length) {
                return synopsis.substring(0, length) + '...';
            },
            calculation: function(value) {
                return value +7;
            }
        }

        
    }));
    app.set('view engine', 'hbs');
    app.set('views', './views');
    app.use(express.static('public'));
    app.use('/', router);
    

    //On lance l'ecoute sur le port déclaré plus haut
    app.listen(4000, () => {
        console.log(`le serveur ecoute à l'adresse http://localhost:4000`);
    })
}
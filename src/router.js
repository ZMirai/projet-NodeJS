const express = require('express');
const kitsuProvider = require('./services/kitsuProvider.js');

const router = express.Router();

//const trimString = require('./app.js');
//const truncateSynopsis = require('./app.js');

//On crée un callback
router.get('/', async (request, response, next) => {
    //var shortenDes = response.data.attributes.description;
    const character = await kitsuProvider.getCharacter(1, 0).synopsis;
    console.log(character);

    response.render('index', {
        'index': true,
        // premier parametre = "j'en veux" | deuxième parametre = "a partir de"
        Mangas: await kitsuProvider.getMangas(5, 0),
        // premier parametre = "j'en veux"  | deuxième parametre = "a partir de"
        Animes: await kitsuProvider.getAnimes(5, 0),
        Character: await kitsuProvider.getCharacter(1, 0)
    });
    console.log(character);
})


//Deuxième route top anime
router.get('/top10-anime', async (request, response) => {
    response.render('top10-anime', {
        'top10-anime': true,
        // premier parametre = "j'en veux" | deuxième parametre = "a partir de"
        mangas: await kitsuProvider.getMangas(10, 10),
        // premier parametre = "j'en veux"  | deuxième parametre = "a partir de"
        animes: await kitsuProvider.getAnimes(10, 10)
    });
})

//Deuxième route top manga
router.get('/top10-manga', async (request, response) => {
    response.render('top10-manga', {
        'top10-manga': true,
        // premier parametre = "j'en veux" | deuxième parametre = "a partir de"
        mangas: await kitsuProvider.getMangas(10, 5),
        // premier parametre = "j'en veux"  | deuxième parametre = "a partir de"
        animes: await kitsuProvider.getAnimes(10, 5)
    });
})

//Route vote
router.get('/vote', async (request, response) => {
    response.render('vote', {
        'under': true,
        // premier parametre = "j'en veux" | deuxième parametre = "a partir de"
        mangas: await kitsuProvider.getMangas(10, 0),
        // premier parametre = "j'en veux"  | deuxième parametre = "a partir de"
        animes: await kitsuProvider.getAnimes(10, 0)
    });
})



router.get('/une-autre-page', async (request, response) => {
    response.render('une-autre-page', { 
        'under': true,
        Character: await kitsuProvider.getCharacter(3, 0) 
    });
})

router.get('/encore-une-page', (request, response) => {
    response.render('encore-une-page', { 'encore': true });
})


// set up a route for the API endpoint
router.get('/characters', function (req, res) {
    // call the API using Axios
    random.getCharacters()
      .then(function (response) {
        // return the response from the API
        res.json(response.data);
      })
      .catch(function (error) {
        // code to execute if there is an error
        console.log(error);
        res.send(error);
      });
    response.render('characters', { 
        'test': true 
    });
  });

module.exports = router;
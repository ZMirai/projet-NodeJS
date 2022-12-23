/* Exemple utilisation axios
A titre d'info */


const axios = require('axios');

module.exports = _ => {
    axios.get('https://kitsu.io/api/edge/manga')
      .then(function (response) {
        // en cas de réussite de la requête
        console.log(response.data);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      })
      .then(function () {
        // dans tous les cas
      });

    const options = {
      method: 'GET',
      url: 'https://kitsu.io/api/edge',
      headers: {
        'Accept': "application/vnd.api+json",
        'Content-Type': "application/vnd.api+json"
      },
      json: true
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });    
}


const { get } = require('request-promise-native');

/* Exemple utilisation axios
A titre d'info */
module.exports = {
    name: 'anime',
    run: async (client, message, args) => {
        if (!args.lenth) {
            //return message.channel.Send('Svp entrez un titre')
            return console.log('help')
        }

        let option = {  //Appel de l'API Kitsu
            url: `https://kitsu.io/api/edge/manga?filter[text]=${args.join(" ")}`,
            method: `GET`,
            //Chaque requete necessite ce header
            headers: {
                'Accept': "application/vnd.api+json",
                'Content-Type': "application/vnd.api+json"
            },
            json: true
        }
    }
}
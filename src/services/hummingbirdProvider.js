const axios = require("axios");

module.exports = async () => {

	const options = {
	  method: 'GET',
	  url: 'https://hummingbirdv1.p.rapidapi.com/anime/steins-gate',
	  headers: {
	    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
	    'X-RapidAPI-Host': 'hummingbirdv1.p.rapidapi.com',
	    'Authorization': 'Bearer '+token

	  }
	};

	const response = await axios.request(options);
	return response.data;
};
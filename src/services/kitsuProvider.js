const axios = require("axios");
const trimString = require('../app.js');

class kitsuProvider
{
	/*
		limit  : "j'en veux"
		offset : "a partir de"
	*/

	constructor() {}

	

	// method pour récupérer la liste des mangas
	async getMangas(limit = 5, offset = 0)
	{
		const response = await axios.get(`https://kitsu.io/api/edge/manga?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`);
		return response.data.data;
	}

	// method pour récupérer la liste des animes
	async getAnimes(limit = 5, offset = 0)
	{
		const response = await axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`);
		return response.data.data;
	}

	// method pour récupérer la liste des animes populaire
	async getPopManga(limit = 5, offset = 0)
	{
		const response = await axios.get(`https://kitsu.io/api/edge/trending/manga?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`);
		return response.data.data;
	}

	// method pour récupérer la liste des animes populaire
	async getPopAnimes(limit = 5, offset = 0)
	{
		const response = await axios.get(`https://kitsu.io/api/edge/trending/anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`);
		return response.data.data;
	}

	// method pour récupérer la liste des perso populaire
	async getCharacter(limit = 9, offset = 0)
	{
		const response = await axios.get(`https://kitsu.io/api/edge/characters?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`);

		return response.data.data;
	}



	//https://kitsu.io/api/edge/anime-characters
}

module.exports = new kitsuProvider();
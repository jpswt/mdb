import axios from 'axios';

const client = axios.create({
	baseURL: process.env.API_BASE_URL,
	params: { api_key: process.env.API_KEY },
});

export const searchMovies = async (query: string) => {
	try {
		const response = await client.get('/search/movie', {
			params: { query },
		});

		if (response.data && response.data.results) {
			return response.data.results;
		} else {
			console.error(`Couldn't get data`);
		}
	} catch (err) {
		console.error(err);
		return [];
	}
};

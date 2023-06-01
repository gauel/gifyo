
import { PUBLIC_URL, API_URL, API_OPTIONS } from '$lib/js/strapi';

export const load = async ({ fetch }) => {

	let gifs = {}

	try {
		let url = `${API_URL}/gifs?populate=*`
		const response = await fetch(url, API_OPTIONS);
		gifs = (await response.json())?.data || {};
	} catch (ex) {
		console.error('fetch api failed with', ex);
	}

	return {
		gifs,
		PUBLIC_URL
	}
}
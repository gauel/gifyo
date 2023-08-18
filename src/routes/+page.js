
import { PUBLIC_URL, API_URL, API_OPTIONS } from '$lib/js/strapi';

export const load = async ({ fetch }) => {


	let gifs = [
		{
			id: 1,
			gif: {
				url: "/gif/1.gif"
			}
		},
		{
			id: 2,
			url: "/gif/2.gif"
		}
	]


	try {
		let url = `${PUBLIC_URL}/api/gifs?populate=*`
		const response = await fetch(url);
		gifs = (await response.json())?.data || {};
		console.log("gifs:", gifs);
	} catch (ex) {
		console.error('fetch api failed with', ex);
	}

	return {
		gifs,
		PUBLIC_URL
	}
}
export const prerender = true;
import { db, readItems } from "$lib/api/directus";
import { attr } from "svelte/internal";

export const load = async () => {
	/*gif.attributes.file.data.attributes.url*/
	let gifs = null;

	try {
		gifs = await db.request(readItems('gifs', {
			fields: ['*'],
		}));
		console.log("Gifs:", gifs);
	} catch (err) {
		console.error("Fetch error:", err);
	}

	return {
		gifs
	}
};

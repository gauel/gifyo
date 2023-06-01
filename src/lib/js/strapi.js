import { PUBLIC_API_TOKEN, PUBLIC_URL } from "$env/static/public"

export { PUBLIC_API_TOKEN };
export { PUBLIC_URL };


export const API_URL = PUBLIC_URL + '/api';
export const API_OPTIONS = {
	headers: {
		'Authorization': `Bearer ${PUBLIC_API_TOKEN}`,
		'Content-Type': 'application/json'
	}
}

/*
export const infoQueryBase = new URLSearchParams("populate[File][populate][0]=File&populate[Image][populate][0]=Image");
export const articlesQueryBase = new URLSearchParams("populate=Category,Image");
export const categoryFilter = "filters[Category][Slug][$eq]";
export const positionsQueryBase = new URLSearchParams("populate=Name,Link");
*/


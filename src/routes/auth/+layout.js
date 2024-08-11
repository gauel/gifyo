export const prerender = true;

import { error } from '@sveltejs/kit';
import { isLoggedIn } from '$lib/api/auth';

export const load = async () => {
	if (!isLoggedIn()) {
		throw error(401, 'Unauthorized auth layout');
	}
};
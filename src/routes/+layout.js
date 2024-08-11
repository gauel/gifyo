import { goto } from '$app/navigation';
import { isLoggedIn } from '$lib/api/auth';

export const prerender = true;

export const load = async () => {
	if (isLoggedIn()) {
		//goto('/auth/feed');
	}
};
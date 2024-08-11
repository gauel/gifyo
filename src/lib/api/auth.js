// src/lib/auth.js

import { user } from '$lib/js/store';
import { db } from "$lib/api/directus";
import { goto } from '$app/navigation';

export async function login(email, password) {
	console.log("Login with credentials:", email, password);

	try {
		const response = await db.login(email, password);
		console.log("Login response:", response);

		if (response && response.access_token) {
			user.set({ token: response.access_token });
			goto("/auth/feed");
		} else {
			throw new Error("Login failed: No token received");
		}
	} catch (error) {
		console.error("Login error:", error);
		return { error: error.message };
	}
}

export async function isLoggedIn() {
	let currentUser;
	const token = await db.getToken();
	user.subscribe(value => currentUser = value)();
	console.log("Check if user is logged in", currentUser);
	console.log("TOken?", token);
	return currentUser && currentUser.token !== undefined;
}

export function logout() {
	user.set({});
}

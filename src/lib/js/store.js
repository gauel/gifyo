import { get, writable } from "svelte/store";
import { browser } from '$app/environment';

/* Store factory */
export function store(name, data, save = false) {
	const str = writable(data);
	const { subscribe, set } = str;

	browser && save && (localStorage[name] ? set(JSON.parse(localStorage[name])) : localStorage[name] = JSON.stringify(data));

	return {
		subscribe,
		set: item => {
			browser && save && (localStorage[name] = JSON.stringify(item));
			set(item);
		},
		update: item => {
			const updatedStore = item(get(str));
			browser && save && (localStorage[name] = JSON.stringify(updatedStore));
			set(updatedStore);
		}
	};
}

/* These settings are saved to local storage */
const userDefault = {};

/* These settings are global variables that reset with every page refresh */
const stateDefaults = {
	opened: false,
	moving: false
}

export const user = store("settings", userDefault, true);
export const state = store("glob", stateDefaults);
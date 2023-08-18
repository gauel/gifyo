import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.d4dbc107.js","_app/immutable/chunks/index.d192db91.js","_app/immutable/chunks/index.7bc89eca.js","_app/immutable/chunks/index.655477b5.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/2.80e1561e.css"];
export const fonts = [];

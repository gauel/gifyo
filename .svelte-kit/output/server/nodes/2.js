import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.6c6c8a26.js","_app/immutable/chunks/index.6ad95c8d.js","_app/immutable/chunks/index.aa27febf.js","_app/immutable/chunks/store.e1663b9d.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/2.4803a84e.css"];
export const fonts = [];

import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.cd85221e.js","_app/immutable/chunks/index.3ae62e9d.js","_app/immutable/chunks/crossfade.ec4b83be.js","_app/immutable/chunks/index.67f2b5cc.js"];
export const stylesheets = [];
export const fonts = [];

import * as universal from '../entries/pages/auth/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auth/+layout.js";
export const imports = ["_app/immutable/nodes/2.516bec09.js","_app/immutable/chunks/index.260e4b2f.js","_app/immutable/chunks/Menu.svelte_svelte_type_style_lang.32d3f67f.js","_app/immutable/chunks/index.3850d28c.js","_app/immutable/chunks/index.957a5efe.js","_app/immutable/chunks/store.9a8bff77.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.e0ad881e.js"];
export const stylesheets = ["_app/immutable/assets/Menu.c87d5a44.css"];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c9642935.js","_app/immutable/chunks/index.260e4b2f.js","_app/immutable/chunks/singletons.43d5b561.js","_app/immutable/chunks/index.e0ad881e.js"];
export const stylesheets = [];
export const fonts = [];

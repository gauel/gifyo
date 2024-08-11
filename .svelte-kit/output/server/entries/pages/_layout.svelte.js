import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/index2.js";
import "../../chunks/Menu.svelte_svelte_type_style_lang.js";
import "@capacitor/haptics";
import "../../chunks/directus.js";
const app = "";
let title = "Page title", description = "Description", shareImage = "/ogimage.jpg", themeColor = "#000";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `<!-- HEAD_svelte-154uz7n_START --><meta charset="utf-8"><meta http-equiv="Content-Language" content="cs"><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1, viewport-fit=cover"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", shareImage, 0)}><meta property="og:type" content="website"><meta property="twitter:title" content=""><meta property="twitter:description"${add_attribute("content", description, 0)}><meta property="twitter:image"${add_attribute("content", shareImage, 0)}><meta name="twitter:card" content="summary_large_image"><meta name="theme-color"${add_attribute("content", themeColor, 0)}><link href="/favicon.png" rel="icon"><link href="/touchicon.png" rel="shortcut icon" type="image/x-icon"><link href="/touchicon.png" rel="apple-touch-icon"><link href="/manifest.json" rel="manifest" crossorigin="use-credentials"><!-- HEAD_svelte-154uz7n_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

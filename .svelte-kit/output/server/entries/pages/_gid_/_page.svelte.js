import { c as create_ssr_component, d as subscribe } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/crossfade.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<a href="/"><img src="http://127.0.0.1:1337/uploads/gif4_c97a90d13b.gif" alt="" class="w-full rounded-xl aspect-[3/4] object-cover"></a>`;
});
export {
  Page as default
};

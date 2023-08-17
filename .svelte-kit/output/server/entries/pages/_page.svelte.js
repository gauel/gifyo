import { c as create_ssr_component, a as add_attribute, f as each, v as validate_component } from "../../chunks/index2.js";
import { P as PUBLIC_URL } from "../../chunks/public.js";
import "../../chunks/crossfade.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gif = {} } = $$props;
  if ($$props.gif === void 0 && $$bindings.gif && gif !== void 0)
    $$bindings.gif(gif);
  return `<button><img${add_attribute("src", PUBLIC_URL + gif?.gif?.url, 0)} alt="" class="rounded-xl aspect-[3/4] object-cover w-full"></button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="text-white"><div class="fixed top-0 left-0 h-[20%] w-full gradient-to-b pointer-events-none"></div>
	<div class="fixed bottom-0 left-0 h-24 w-full gradient-to-t pointer-events-none"></div>
	<div class="grid grid-cols-2 gap-2 py-12">${each(data?.gifs, (gif, index) => {
    return `${validate_component(Post, "Post").$$render($$result, { gif }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};

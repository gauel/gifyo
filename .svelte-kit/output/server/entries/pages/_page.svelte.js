import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, j as each, v as validate_component } from "../../chunks/index2.js";
import { g as gif1, a as gif2, b as gif3 } from "../../chunks/gif3.js";
const gif4 = "/_app/immutable/assets/gif4.0a9412f8.gif";
const gif5 = "/_app/immutable/assets/gif5.57502768.gif";
const gif6 = "/_app/immutable/assets/gif6.d00cacd1.gif";
const gif7 = "/_app/immutable/assets/gif7.998f532a.gif";
const gif8 = "/_app/immutable/assets/gif8.5fccb37d.gif";
const appIcon = "/_app/immutable/assets/app-icon.2e56d429.png";
const Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".button.svelte-14t73z6{transition:transform 400ms cubic-bezier(0.2, 0.9, 0.3, 1),\n			box-shadow 400ms cubic-bezier(0.2, 0.9, 0.3, 1),\n			background 400ms cubic-bezier(0.2, 0.9, 0.3, 1)}.button.svelte-14t73z6:not(:disabled){box-shadow:0px 30px 38px -16px rgba(255, 255, 255, 0.2) inset,\n			0px 0.3px 0px 0px rgba(255, 255, 255, 0.3) inset,\n			0px 1px 6px 0px rgba(255, 255, 255, 0.1) inset}.button.svelte-14t73z6:active{box-shadow:0px 30px 38px -16px rgba(255, 255, 255, 0) inset,\n			0px 0.3px 0px 0px rgba(255, 255, 255, 0.3) inset,\n			0px 1px 6px 0px rgba(255, 255, 255, 0.1) inset;transform:scale(0.98)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button", style = "", disabled = false, primary = true } = $$props;
  const variants = {
    primary: `button w-auto backdrop-blur-lg shrink-0 px-8 rounded-[12px] text-white/80 text-lg font-medium flex items-center justify-center bg-[#440795] active:bg-[#37047b] h-[48px] min-h-[48px] bg-[#440795] active:bg-[#37047b] disabled:pointer-events-none disabled:bg-white/5 disabled:text-white/30`,
    simple: "bg-transparent active:bg-transparent text-violet-500 active:text-violet-600 font-medium disabled:text-white/30 disabled:pointer-events-none"
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  $$result.css.add(css$2);
  return `<button${add_attribute("type", type, 0)} ${disabled ? "disabled" : ""} class="${escape(null_to_empty(variants[primary ? "primary" : "simple"] + " " + style), true) + " svelte-14t73z6"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const Input_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input.svelte-1tdmsy9{border:solid 0.5px rgba(255, 255, 255, 0.1);transition:background-color 300ms ease-in-out, border-color 300ms ease-in-out}input.svelte-1tdmsy9:invalid{border-color:rgb(239 68 68 / 50%);border-width:0.5px}input.disabled.svelte-1tdmsy9{background:rgba(255, 255, 255, 0.005)}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text", placeholder = "", name = "", disabled = false, style = "", pattern = null, required = false, minlength = 0, error = null, value = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.minlength === void 0 && $$bindings.minlength && minlength !== void 0)
    $$bindings.minlength(minlength);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  return `<div class="input-wrapper relative shrink-0 flex flex-col">${slots.before ? slots.before({}) : ``}
	<input${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("pattern", pattern, 0)}${add_attribute("minlength", minlength, 0)}${add_attribute("value", value, 0)} class="${"w-full placeholder-white/20 h-[50px] autofill:bg-yellow-200 invalid:bg-red-500/5 bg-white/5 px-4 rounded-xl text-lg backdrop-blur-lg disabled:bg-transparent focus-visible:outline-none " + escape(disabled ? "text-white/50" : "text-white", true) + " " + escape(style, true) + " svelte-1tdmsy9"}">
	${error ? `<div class="h-[20px] text-red-500 mt-1 text-xs px-4">${escape(error)}</div>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1bxjypj-slideUp{0%{transform:translateY(0)}100%{transform:translateY(-33.33%)}}.gifs-bg.svelte-1bxjypj{animation:svelte-1bxjypj-slideUp 15s linear infinite}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let readyToSend;
  const bgGifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif1, gif2, gif3, gif4];
  let loading = false, nickname = "", email = "", password = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    readyToSend = email && password.length >= 8;
    $$rendered = `<div class="w-full h-dvh overflow-hidden flex items-center"><div class="absolute inset-0 w-full h-dvh overflow-hidden z-0"><div class="gifs-bg grid grid-cols-2 gap-px w-full svelte-1bxjypj">${each(bgGifs, (gif) => {
      return `<img${add_attribute("src", gif, 0)} class="bg-violet-500/50 w-full aspect-[3/4] flex-1" alt="Background">`;
    })}</div></div>
	<form class="w-full gap-8 flex flex-col h-dvh px-8 bg-black/90 backdrop-blur pt-[calc(64px+var(--safe-area-top))] pb-16 overflow-auto relative z-10">
		<img${add_attribute("src", appIcon, 0)} alt="App icon" class="w-[72px] mx-auto">
		<div class="flex flex-col gap-2 text-center items-center justify-center"><h1 class="text-3xl leading-none font-bold text-center">Life in motion</h1>
			<p class="opacity-50">Sign in to your account, ${escape(nickname)}</p></div>
		<div class="flex flex-col transition-all duration-500 ease-in-out">${``}
			${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        disabled: loading,
        name: "email",
        placeholder: "E-mail",
        style: "mb-4",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        minlength: 8,
        disabled: loading,
        name: "password",
        placeholder: "Password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${``}</div>

		${validate_component(Button, "Button").$$render($$result, { disabled: !readyToSend }, {}, {
      default: () => {
        return `${`${escape("Login")}`}`;
      }
    })}
		${validate_component(Button, "Button").$$render($$result, { primary: false, disabled: loading }, {}, {
      default: () => {
        return `${escape("Create new account")}`;
      }
    })}</form>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

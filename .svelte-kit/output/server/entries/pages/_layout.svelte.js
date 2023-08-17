import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as compute_slots } from "../../chunks/index2.js";
import { faPlus, faMagnifyingGlass, faBell, faCircleUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@capacitor/haptics";
const app = "";
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const fa_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$3);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const MenuLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".menu-link.svelte-1ieiykf{transition:background-color 150ms 0s ease-in-out,\n		color 150ms 0s ease-in-out\n	}",
  map: null
};
const MenuLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { icon = null, clickable = true, index = 1, style = "h-[44px]" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.clickable === void 0 && $$bindings.clickable && clickable !== void 0)
    $$bindings.clickable(clickable);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `<button class="${[
    "menu-link w-[220px] flex items-center justify-between pl-5 text-sm text-white/80 border-white/5 border-b last:border-none shrink-0 " + escape(style, true) + " " + escape(clickable && "active:bg-white/5 active:text-white", true) + " svelte-1ieiykf",
    $$slots.toggle ? "pr-2" : ""
  ].join(" ").trim()}"><div>${slots.default ? slots.default({}) : ``}</div>
	${slots.toggle ? slots.toggle({}) : ``}
	${icon ? `${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon,
      class: "text-[16px] w-[54px] h-full flex items-center justify-center"
    },
    {},
    {}
  )}` : ``}
</button>`;
});
const Toggle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toggle-indicator.svelte-1x0rgoj{transition:transform 200ms 0s ease-in-out}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$1);
  return `<button class="${"h-[26px] w-[42px] rounded-full border-[0.33px] border-white/10 p-[2px] transition-colors duration-300 ease-in-out flex items-center " + escape(checked ? "bg-sky-500" : "bg-white/10", true)}"><div class="${"toggle-indicator h-[22px] w-[22px] bg-white rounded-full " + escape(checked && "translate-x-[16px]", true) + " svelte-1x0rgoj"}"></div>
</button>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: "#menu.svelte-o7o2mk{transition:opacity 200ms 0s cubic-bezier(0, .9, .76, .99),\n		width 200ms 0s cubic-bezier(0, .9, .76, .99),\n		height 200ms 0s cubic-bezier(0, .9, .76, .99),\n		border-radius 200ms 0s cubic-bezier(0, .9, .76, .99)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let following = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<button id="menu" class="${[
      "fixed bottom-[calc(var(--safe-area-inset-bottom)+1rem)] right-4 overflow-hidden rounded-[16px] backdrop-blur-lg flex flex-col items-end justify-end " + escape(
        "w-[220px] h-[290px] bg-neutral-800/60",
        true
      ) + " svelte-o7o2mk",
      "opened"
    ].join(" ").trim()}">${`<div class="border-black/30 border-b-[8px]">${validate_component(MenuLink, "MenuLink").$$render($$result, { icon: faPlus, index: 5 }, {}, {
      default: () => {
        return `New Gif`;
      }
    })}
			${validate_component(MenuLink, "MenuLink").$$render($$result, { index: 4, clickable: false }, {}, {
      toggle: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          { slot: "toggle", checked: following },
          {
            checked: ($$value) => {
              following = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      },
      default: () => {
        return `Following only
				`;
      }
    })}</div>
		<div class="border-black/30 border-b-[8px]">${validate_component(MenuLink, "MenuLink").$$render($$result, { icon: faMagnifyingGlass, index: 3 }, {}, {
      default: () => {
        return `Search`;
      }
    })}
			${validate_component(MenuLink, "MenuLink").$$render($$result, { icon: faBell, index: 2 }, {}, {
      default: () => {
        return `Notifications`;
      }
    })}
			${validate_component(MenuLink, "MenuLink").$$render($$result, { icon: faCircleUser, index: 1 }, {}, {
      default: () => {
        return `Profile`;
      }
    })}</div>`}
		${validate_component(MenuLink, "MenuLink").$$render(
      $$result,
      {
        icon: faXmark,
        style: "h-[54px] text-white/50"
      },
      {},
      {
        default: () => {
          return `Close`;
        }
      }
    )}

</button>`;
  } while (!$$settled);
  return $$rendered;
});
let title = "Page title", description = "Description", shareImage = "/ogimage.jpg", themeColor = "#000";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `<!-- HEAD_svelte-ao2v5j_START --><meta charset="utf-8"><meta http-equiv="Content-Language" content="cs"><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1, viewport-fit=cover">${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", shareImage, 0)}><meta property="og:type" content="website"><meta property="twitter:title" content=""><meta property="twitter:description"${add_attribute("content", description, 0)}><meta property="twitter:image"${add_attribute("content", shareImage, 0)}><meta name="twitter:card" content="summary_large_image"><meta name="theme-color"${add_attribute("content", themeColor, 0)}><link href="/favicon.png" rel="icon"><link href="/touchicon.png" rel="shortcut icon" type="image/x-icon"><link href="/touchicon.png" rel="apple-touch-icon"><!-- HEAD_svelte-ao2v5j_END -->`, ""}

${slots.default ? slots.default({}) : ``}

${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

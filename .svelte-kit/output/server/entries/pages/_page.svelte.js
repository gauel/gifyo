import { f as assign, n as now, l as loop, i as identity, c as create_ssr_component, a as add_attribute, e as escape, d as subscribe, h as each, v as validate_component } from "../../chunks/index2.js";
import { gsap } from "gsap/dist/gsap.js";
import { CustomEase } from "gsap/dist/CustomEase.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import { Flip } from "gsap/dist/Flip.js";
import { w as writable } from "../../chunks/index.js";
import "@capacitor/haptics";
import { s as state } from "../../chunks/store.js";
function expoOut(t) {
  return t === 1 ? t : 1 - Math.pow(2, -10 * t);
}
function quadInOut(t) {
  t /= 0.5;
  if (t < 1)
    return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Flip);
const superease = "M0,0,C0.218,0,0.382,0.294,0.556,0.648,0.638,0.815,0.694,1,1,1";
const customease = "M0,0,C0,0,0.119,-0.012,0.202,0.052,0.424,0.228,0.365,0.575,0.61,0.838,0.75,0.988,1,1,1,1";
CustomEase.create("custom", superease);
CustomEase.create("custom", customease);
let mBlurProperty;
const getBlurProperty = () => mBlurProperty || (mBlurProperty = gsap.utils.checkPrefix("filter"));
const blurExp = /blur\((.+)?px\)/;
const getBlurMatch = (target) => (gsap.getProperty(target, getBlurProperty()) || "").match(blurExp) || [];
gsap.registerPlugin({
  name: "blur",
  get(target) {
    return +getBlurMatch(target)[1] || 0;
  },
  init(target, endValue) {
    let blurProperty = getBlurProperty(), data = this, filter = gsap.getProperty(target, blurProperty), endBlur = "blur(" + endValue + "px)", match = getBlurMatch(target)[0], index;
    if (filter === "none") {
      filter = "";
    }
    if (match) {
      index = filter.indexOf(match);
      endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
    } else {
      endValue = filter + endBlur;
      filter += filter ? " blur(0px)" : "blur(0px)";
    }
    data.target = target;
    data.interp = gsap.utils.interpolate(filter, endValue);
  },
  render(progress, data) {
    const blurProperty = getBlurProperty();
    data.target.style[blurProperty] = data.interp(progress);
  }
});
gsap.config({
  force3D: true,
  overwrite: "auto"
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gif = {} } = $$props;
  if ($$props.gif === void 0 && $$bindings.gif && gif !== void 0)
    $$bindings.gif(gif);
  return `<button class="post-wrapper aspect-[3/4] "><div class="img-wrapper"><img${add_attribute("src", gif?.url, 0)} alt="" width="300" height="400" draggable="false" class="post aspect-[3/4] h-full object-cover w-full"></div></button>`;
});
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${"transition-color duration-300 " + escape(style, true)}"><path d="M28 7.56605C28 -2.52396 14.913 -1.54211 14 4.78161C13.087 -1.54211 0 -2.52396 0 7.56605C0 15.6381 9.33333 21.8854 14 24C18.6667 21.8854 28 15.6381 28 7.56605Z" fill="currentcolor"></path></svg>`;
});
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.1141 18.2282C25.3108 16.4126 26 14.2806 26 12C26 5.37258 20.1797 0 13 0C5.8203 0 0 5.37258 0 12C0 18.6274 5.8203 24 13 24C15.6411 24 18.0983 23.273 20.1495 22.0239L24.2553 22.7089C25.0226 22.8369 25.6358 22.0784 25.3499 21.355L24.1141 18.2282Z" fill="currentcolor"></path></svg>`;
});
const Report = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2724 2.96152C13.0442 1.63851 14.9558 1.63852 15.7276 2.96153L26.2455 20.9923C27.0233 22.3256 26.0615 24 24.5179 24H3.48207C1.93849 24 0.97675 22.3256 1.75452 20.9923L12.2724 2.96152Z" fill="currentcolor"></path><path d="M14 10V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="14" cy="20" r="1" fill="black"></circle></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".opening.svelte-1d4d6lw{transition:0ms background-color 0s ease-in-out}.closing.svelte-1d4d6lw{transition:500ms background-color 0s ease-in-out, 0s transform 500ms}img.post{transition:500ms border-radius 0s ease-in-out}.img-wrapper img{border-radius:16px}#gif-preview img{border-top-left-radius:40px;border-top-right-radius:40px;border-bottom-left-radius:24px;border-bottom-right-radius:24px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let $$unsubscribe_pointerMoveY;
  let $bgOpacity, $$unsubscribe_bgOpacity;
  let $$unsubscribe_scaleImg;
  let $$unsubscribe_pointerMoveX;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let gifPreviewWrapper, mainGrid, modalScrollY = 0, animationDuration = 400, pointerMoveX = tweened(0, { easing: expoOut, duration: 0 }), pointerMoveY = tweened(0, { easing: expoOut, duration: 0 }), scaleImg = tweened(1, { easing: quadInOut, duration: 0 }), bgOpacity = tweened(0, {
    easing: expoOut,
    duration: animationDuration
  }), detailWrapper, liked = false;
  $$unsubscribe_pointerMoveX = subscribe(pointerMoveX, (value) => value);
  $$unsubscribe_pointerMoveY = subscribe(pointerMoveY, (value) => value);
  $$unsubscribe_scaleImg = subscribe(scaleImg, (value) => value);
  $$unsubscribe_bgOpacity = subscribe(bgOpacity, (value) => $bgOpacity = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_state();
  $$unsubscribe_pointerMoveY();
  $$unsubscribe_bgOpacity();
  $$unsubscribe_scaleImg();
  $$unsubscribe_pointerMoveX();
  return `<div class="text-white relative"><div class="${"fixed top-0 left-0 h-[20%] z-[105] w-full gradient-to-b pointer-events-none transition-all duration-500 ease-in-out -translate-y-px " + escape(
    $state.opened ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-none",
    true
  )}"></div>
	<div class="fixed bottom-0 left-0 h-24 z-[9] w-full gradient-to-t pointer-events-none"></div>


	<div class="${"grid grid-cols-2 gap-2 " + escape(
    $state.moving ? "transition-none" : "transition-transform",
    true
  ) + " duration-[600ms] ease-[0.212,0.114,0.242,0.2815] " + escape(
    $state.opened ? "pointer-events-none" : "pointer-events-auto",
    true
  )}"${add_attribute("this", mainGrid, 0)}><div class="${"backdrop fixed top-0 left-0 w-full h-full bg-black pointer-events-none z-[1] " + escape($state.moving ? "transition-none" : "transition-opacity", true) + " duration-[400ms] " + escape($state.opened ? "opacity-100" : "opacity-50", true)}" style="${"background-color: rgba(0,0,0," + escape($bgOpacity, true) + ");"}"></div>
		<h1 class="text-white font-bold text-[36px]/none px-1 mt-12 mb-4 col-span-2">Feed</h1>
		${each(data?.gifs, (gif, index) => {
    return `${validate_component(Post, "Post").$$render($$result, { gif }, {}, {})}`;
  })}</div>
	<div id="detail" class="${"h-screen w-full rounded-t-[0px] fixed top-0 left-0 z-[99] overflow-y-scroll flex flex-col " + escape(
    $state.opened ? "translate-y-0 opening pointer-events-auto" : "translate-y-0 closing pointer-events-none",
    true
  ) + " " + escape(
    "pointer-events-none",
    true
  ) + " svelte-1d4d6lw"}"${add_attribute("this", detailWrapper, 0)}><button id="gif-preview" class="aspect-[3/4] w-full flex-shrink-0"${add_attribute("this", gifPreviewWrapper, 0)}></button>

		<div class="${"post-menu mx-4 flex gap-4 h-[64px] flex-shrink-0 " + escape(
    $state.opened ? "opacity-100 transition-opacity duration-300" : "opacity-0 translate-y-[300px] transition-all duration-300",
    true
  )}"${add_attribute(
    "style",
    $state.opened && $state.moving ? `transform: translateY(${-1 * modalScrollY}px)` : "",
    0
  )}><div class="flex gap-2 items-center"><div class="h-[42px] w-[42px] rounded-full bg-white/10 shrink-0"></div>
				<div class="flex flex-col gap-1.5"><div class="text-sm/none font-medium">gabriel.uhlir</div>
					<div class="text-xs/none opacity-50">4h ago</div></div></div>
			<div class="flex items-center gap-4 ml-auto text-white/20">${validate_component(Report, "Report").$$render($$result, {}, {}, {})}
				<button>${validate_component(Heart, "Heart").$$render($$result, { style: liked }, {}, {})}</button></div></div>
		<div class="${"h-[800px] bg-neutral-900 flex-shrink-0 rounded-t-[24px] px-4 pt-4 transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] " + escape(
    $state.opened ? "translate-y-0 opacity-100 ease-out" : "translate-y-[64px] opacity-0 pointer-events-none ease-in",
    true
  )}"><div class="flex gap-2 text-white/50"><div class="w-[42px] flex justify-center text-white/10">${validate_component(Comment, "Comment").$$render($$result, {}, {}, {})}</div>
				Comments
			</div></div></div>
</div>`;
});
export {
  Page as default
};

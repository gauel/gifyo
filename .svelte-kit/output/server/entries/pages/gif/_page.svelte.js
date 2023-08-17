import { c as create_ssr_component, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import "recordrtc";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image, recordBtn, recording = false, recorded = false, img_placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  console.log(image);
  return `<img id="camera"${add_attribute("src", img_placeholder, 0)} class="w-[100vw] bg-black/10 dark:bg-white/10 rounded-xl mb-4 object-cover aspect-[3/4]" alt=""${add_attribute("this", image, 0)}>
		<div class="create-menu flex justify-around text-white"><div class="record-btn-wrapper"><button class="${"record-btn " + escape(recording, true) + " " + escape(recorded, true)}"${add_attribute("this", recordBtn, 0)}>${`<div>test?</div>`}</button>
				<button class="upload-btn">upload
				</button></div>
			<button${add_attribute("class", recording, 0)}>${`switch cam`}</button></div>`;
});
export {
  Page as default
};

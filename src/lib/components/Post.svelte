<script>
	import { PUBLIC_URL } from '$env/static/public';
	import { crossfade } from '$lib/js/crossfade'
	import { getOffset } from '$lib/js/utils';
	import { flip } from 'svelte/animate';
	const [send, receive] = crossfade

	let pointerdown = false,
	clicked = false,
	element;

	const setClicking = () => {
		pointerdown = true;
	}

	const unsetClicking = () => {
		pointerdown = false
	}

	const setClicked = () => {
		let top = getOffset(element).top
		let left = getOffset(element).left

		console.log("clicked!", getOffset(element).top, getOffset(element).left);
		element.style.top = top
		element.style.left = left
		element.style.position = "absolute"
		pointerdown = false;
		clicked = true;
	}



	export let gif = {}
</script>

<button
	bind:this={element}
	out:send="{{key: gif?.id}}"
	in:receive="{{key: gif?.id}}"
	class="post-wrapper aspect-[3/4] bg-white/5 rounded-xl"
	class:scale-[0.98]={pointerdown}
	on:pointerdown={setClicking}
	on:pointercancel={unsetClicking}
	on:pointerup={setClicked}
	
>
	<img
		src={PUBLIC_URL + gif?.gif?.url}
		alt=""
		width="300"
		height="400"
		draggable="false"
		class="rounded-xl aspect-[3/4] h-full object-cover w-full"
	/>
</button>

<style>
	.post-wrapper {
		transition: transform 200ms 0s ease-in-out;
	}
</style>
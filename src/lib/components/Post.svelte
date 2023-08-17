<script>
	import { PUBLIC_URL } from '$env/static/public';

	let pointerdown = false;

	const setClicking = () => {
		pointerdown = true;
	}

	const unsetClicking = () => {
		pointerdown = false
	}

	export let gif = {};
</script>

<button
	class="post-wrapper aspect-[3/4] bg-white/5 rounded-xl"
	class:scale-[0.98]={pointerdown}
	on:pointerdown={setClicking}
	on:pointercancel={unsetClicking}
	on:pointerup
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

<style lang="css">
	.post-wrapper {
		transition: transform 200ms 0s ease-in-out;
	}
	
</style>
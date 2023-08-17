<script>
	import { tick } from 'svelte';
	import { Flip } from '$lib/js/gsap';

	import Fa from 'svelte-fa';
	import { faHeart } from '@fortawesome/free-solid-svg-icons'

	import { customEaseEffect } from '$lib/js/gsap';

	import Post from '$lib/components/Post.svelte';
	import { log } from '$lib/js/logger.js';
	import Heart from '$lib/icons/Heart.svelte';
	import Comment from '$lib/icons/Comment.svelte';
	import Report from '$lib/icons/Report.svelte';

	let MODULE = "Feed",
	gifPreviewWrapper,
	opened = false;

	export let data;

	const openGif = async (el) => {
		let state = Flip.getState(el, { props: 'borderRadius' });

		el.classList.remove("rounded-xl");
		el.classList.add("rounded-b-[24px]")
		
		gifPreviewWrapper.append(el);
		opened = true;

		await tick()


		Flip.from(state, {
			duration: 0.4,
			absolute: true,
			scale: true,
			ease: customEaseEffect
		})
	}

	const closeGif = async (el) => {

	}
</script>
<div class="text-white relative">
	<div class="fixed top-0 left-0 h-[20%] z-[2] w-full gradient-to-b pointer-events-none" />
	<div class="fixed bottom-0 left-0 h-24 z-[2] w-full gradient-to-t pointer-events-none" />
	<div class="grid grid-cols-2 gap-2 py-12 transition-transform duration-[800ms] ease-out {opened ? "scale-100" : "scale-100"}">
		{#each data?.gifs as gif, index (gif?.id)}
			<Post
				{gif}
				on:pointerup={(event) => openGif(event.target)}
			/>
		{/each}
	</div>
	<div
		id="detail"
		class="h-screen w-full rounded-t-[0px] fixed top-0 left-0 z-[99] overflow-y-scroll
		{opened ? "translate-y-0 bg-black transition-colors duration-[500ms]" : "translate-y-full"}"
	>
		<div id="gif-preview" class="aspect-[3/4] w-full " bind:this={gifPreviewWrapper}></div>
		<div class="post-menu mx-4 flex gap-4 h-[64px]">
			<div class="flex gap-2 items-center">
				<div class="h-[42px] w-[42px] rounded-full bg-white/10" />
				<div class="flex flex-col gap-1">
					<div class="text-sm/none font-medium">Name</div>
					<div class="text-xs/none opacity-50">Surname</div>
				</div>
			</div>
			<div class="flex items-center gap-3 ml-auto text-white/20">
				<Report />
				<Comment />
				<Heart />
			</div>
		</div>
		<div class="h-[800px] bg-white/10">
			Comments
		</div>
	</div>
</div>
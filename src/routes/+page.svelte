<script>
	import { tick } from 'svelte';
	import { Flip } from '$lib/js/gsap';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';

	import { draggable } from '@neodrag/svelte';

	import { Haptics, ImpactStyle } from '@capacitor/haptics';

	import { customEaseEffect } from '$lib/js/gsap';

	import Post from '$lib/components/Post.svelte';
	import { log } from '$lib/js/logger.js';
	import Heart from '$lib/icons/Heart.svelte';
	import Comment from '$lib/icons/Comment.svelte';
	import Report from '$lib/icons/Report.svelte';
	import { disableScroll, enableScroll } from '$lib/js/utils.js';

	let MODULE = "Feed",
	gifPreviewWrapper,
	opened = false,
	gifEl,
	dragDisabled = false,
	gifImage,
	lastParent,
	animating = false,
	scaleImg = tweened(1, { easing: expoOut, duration: 1500 }),
	bgOpacity = tweened(0, { easing: expoOut, duration: 600 }),
	detailWrapper,
	moving = false,
	dragPosition = tweened(
		{ x: 0, y: 0 },
		{ easing: expoOut, duration: 350 }
	);

	export let data;

	const flipGif = async (state, element, target) => {
		let lastState = Flip.getState(element, { props: 'borderRadius' });
		console.log("setting z-index to 1000")

		target.append(element);

		await tick()

		Flip.from(lastState, {
			duration: 0.4,
			absolute: true,
			scale: true,
			zIndex: 110,
			ease: customEaseEffect,
			onComplete() {
				console.log("Flip completed. Setting z-index to 1")
				animating = false;
			}
		})
	}

	const openGif = async (e) => {
		opened = true;
		lastParent = e.currentTarget;
		gifImage = e.currentTarget.firstChild.firstChild
		gifEl = e.currentTarget.firstChild
		
		console.log("opened = true. lastParent:", lastParent, "gifEl", gifEl, "gifImage:", gifImage);
		animating = true;
		$bgOpacity = 1

		disableScroll();

		gifImage.classList.remove("rounded-xl");
		gifImage.classList.add("rounded-b-[24px]")
		gifImage.classList.add("rounded-t-[40px]")

		flipGif("opening", gifEl, gifPreviewWrapper)
	}

	const handleTouch = () => {
		let scrollTop = detailWrapper.scrollTop;
		console.log("scroll top:", scrollTop);

		if(scrollTop > 16) {
			return
		} else {
			moving = true;
			console.log("moving:", moving)
		}
	}

	$: $dragPosition.y, (() => {
		if(opened) {
			if(moving && $dragPosition.y > 0) {
				$scaleImg = (1-(0.001*$dragPosition.y))
				$bgOpacity = 1-(0.002*$dragPosition.y)
			}
		}

		dragDisabled = $dragPosition.y < 0 ? true : false
	})();

	$: $scaleImg, (() => {
		if(opened || animating) {
			gifImage.style.scale = $scaleImg
		}
	})()

	const handleTouchUp = () => {
		
		if($dragPosition.y > 140) {
			moving = false;
			$scaleImg = 1;
			$bgOpacity = 0;
			//gifEl.style.transform = `scale(${$scaleImg})`
			//gifEl.style.transition = `100ms transform 0s ease-out`
			closeGif()
		}
		console.log("moving:", moving)
	}

	const closeGif = async () => {
		gifImage.classList.add("rounded-xl");
		gifImage.classList.remove("rounded-b-[24px]")
		gifImage.classList.remove("rounded-t-[40px]")
		
		animating = true;
		flipGif("closing", gifEl, lastParent);

		enableScroll()
		opened = false;
	}
</script>

<div class="text-white relative">
	<div class="fixed top-0 left-0 h-[20%] z-[105] w-full gradient-to-b pointer-events-none transition-all duration-500 ease-in-out -translate-y-px {opened ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-none"}" />
	<div class="fixed bottom-0 left-0 h-24 z-[99] w-full gradient-to-t pointer-events-none" />
	<div class="grid grid-cols-2 gap-2 py-12 transition-transform duration-[800ms] ease-out
	{opened ? "pointer-events-none" : "pointer-events-auto"}">
		<div
			class="backdrop fixed top-0 left-0 w-full h-full bg-black pointer-events-none z-[1] transition-opacity duration-[800ms]
			{opened ? "opacity-100" : "opacity-50"}"
			style="background-color: rgba(0,0,0,{$bgOpacity});" />
		{#each data?.gifs as gif, index (gif?.id)}
			<Post
				{gif}
				on:pointerup={(event) => openGif(event)}
			/>
		{/each}
	</div>
	<div
		id="detail"
		class="h-screen w-full rounded-t-[0px] fixed top-0 left-0 z-[99] overflow-y-scroll flex flex-col
		{opened ? "translate-y-0 opening" : "translate-y-full closing"}
		{animating ? "pointer-events-none" : "pointer-events-auto"}"
		bind:this={detailWrapper}
	>
		<button
			id="gif-preview"
			class="aspect-[3/4] w-full flex-shrink-0"
			on:pointerdown={handleTouch}
			on:pointerup={handleTouchUp}
			bind:this={gifPreviewWrapper}
			use:draggable={{
				position: $dragPosition,
				disabled: dragDisabled,
				onDrag: ({ offsetX, offsetY }) => {
					dragPosition.set({ x: offsetX, y: offsetY }, { duration: 0 })
				},
				onDragEnd: () => {
					$dragPosition = { x: 0, y: 0 };
				},
			}}
		></button>

		<div class="post-menu mx-4 flex gap-4 h-[64px] flex-shrink-0
		{opened ? "opacity-100 transition-opacity duration-300" : "opacity-0 translate-y-[300px] transition-all duration-300"}"
		style="{opened && moving ? `transform: translateY(${$dragPosition.y}px)` : ""}">
			<div class="flex gap-2 items-center">
				<div class="h-[42px] w-[42px] rounded-full bg-white/10" />
				<div class="flex flex-col gap-1.5">
					<div class="text-sm/none font-medium">{$dragPosition.y}</div>
					<div class="text-xs/none opacity-50">4h ago</div>
				</div>
			</div>
			<div class="flex items-center gap-4 ml-auto text-white/20">
				<Report />
				<Comment />
				<Heart />
			</div>
		</div>
		<div class="h-[800px] bg-white/10 flex-shrink-0 transition-transform duration-[400ms] {opened ? "translate-y-0 ease-out" : "translate-y-full ease-in"}"
		style="{opened && moving ? `transform: translateY(${$dragPosition.y}px); transition: none` : ""}">
			Comments
		</div>
	</div>
</div>

<style>
	.opening {
		transition: 0ms background-color 0s ease-in-out;
	}
	.closing {
		transition: 500ms background-color 0s ease-in-out, 0s transform 500ms;
	}
</style>
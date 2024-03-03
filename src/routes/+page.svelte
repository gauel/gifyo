<script>
	import { tick } from 'svelte';
	import { Flip } from '$lib/js/gsap';
	import { tweened } from 'svelte/motion';
	import { expoOut, quadInOut, expoIn, cubicOut } from 'svelte/easing';

	import { Haptics, ImpactStyle } from '@capacitor/haptics';

	import { customEaseEffect } from '$lib/js/gsap';

	import { state } from '$lib/js/store.js';

	import Post from '$lib/components/Post.svelte';
	import { log } from '$lib/js/logger.js';
	import Heart from '$lib/icons/Heart.svelte';
	import Comment from '$lib/icons/Comment.svelte';
	import Report from '$lib/icons/Report.svelte';
	import { disableScroll, enableScroll } from '$lib/js/utils.js';

	let MODULE = "Feed",
	gifPreviewWrapper,
	gifEl,
	mainGrid,
	playHaptic = true,
	preventTransform = true,
	gifImage = null,
	lastParent,
	animating = false,
	releaseToClose = false,
	modalScrollY = 0,
	pointerInitialX = 0,
	pointerInitialY = 0,
	animationDuration = 400,
	pointerMoveX = tweened(0, { easing: expoOut, duration: 0 }),
	pointerMoveY = tweened(0, { easing: expoOut, duration: 0 }),
	scaleImg = tweened(1, { easing: quadInOut, duration: 0 }),
	scaleGrid = 1,
	bgOpacity = tweened(0, { easing: expoOut, duration: animationDuration }),
	detailWrapper,
	liked = false;

	/*
	$: $pointerMoveY, (() => {
		if($state.opened && $state.moving) {
			if($pointerMoveY > 0) {
				$state.moving = true
				$scaleImg = (1-(0.002*$pointerMoveY))
				scaleGrid = (1.5-(0.0005*$pointerMoveY))
				$bgOpacity = 1-(0.002*$pointerMoveY)
			}else if($pointerMoveY < 0) {
				$state.moving = false
				pointerMoveX.set(0, {duration: 1000})
				pointerMoveY.set(0, {duration: 1000})
			}
			console.log("pointerMoveY:", $pointerMoveY);
		}
	})();
	*/
	$: $scaleImg, (() => {
		if(gifImage && !preventTransform) {
			gifImage.style.transform = `scale(${$scaleImg}) translate3d(${0.5*$pointerMoveX}px, 0, 0)`
			//detailWrapper.style.transform = `translate3d(0, ${(pointerMoveY) + "px"}, 0)`
		}
	})()
	
	$: scaleGrid, (() => {
		if(gifImage) {
			mainGrid.style.transform = `scale(${scaleGrid})`
		}
	})()
	
	export let data;

	const flipGif = async (state, element, target) => {
		let lastState = Flip.getState(element);

		target.append(element);

		await tick()

		Flip.from(lastState, {
			duration: animationDuration/1000,
			absolute: true,
			scale: true,
			zIndex: 110,
			ease: customEaseEffect,
			onComplete() {
				animating = false;
				console.log("animating:", animating)
			}
		})
	}

	const getModalScroll = () => {
		modalScrollY = detailWrapper.scrollTop;
		console.log("scroll top:", modalScrollY);
	}

	const setListOrigin = () => {
		let left = lastParent.offsetLeft;
		let top = lastParent.offsetTop;
		let w = lastParent.offsetWidth
		let h = lastParent.offsetHeight

		console.log("wrapper offset, left:", left, "top:", top, "width:", w, "height:", h);
		let originLeft = left > w ? left + w : 0;
		let originTop = top + (h/2);
		console.log("setting grid origin to:", originLeft, originTop)

		mainGrid.style.transformOrigin = `${originLeft}px ${originTop}px`;
	}

	const openGif = async (e) => {
		console.log("open gif");
		if($state.opened)
			return

		$state.opened = true;
		lastParent = e.currentTarget;
		gifImage = e.currentTarget.firstChild.firstChild
		gifEl = e.currentTarget.firstChild
		releaseToClose = false
		//detailWrapper.style.transform = ""

		setListOrigin();
		
		console.log("opened = true. lastParent:", lastParent, "gifEl", gifEl, "gifImage:", gifImage);
		animating = true;
		console.log("animating:", animating)
		scaleGrid = 2
		$bgOpacity = 1

		disableScroll();

		flipGif("opening", gifEl, gifPreviewWrapper)
	}

	const handleTouch = (e) => {
		modalScrollY = detailWrapper.scrollTop;
		pointerInitialX = e.changedTouches[e.changedTouches.length-1].pageX
		pointerInitialY = e.changedTouches[e.changedTouches.length-1].pageY
		preventTransform = true;
		playHaptic = true;
		
		console.log({
			"modalScrollY:": modalScrollY,
			"pointerInitialX:": pointerInitialX,
			"pointerInitialY:": pointerInitialY
		});
	}

	const handleTouchUp = () => {
		if($pointerMoveY > 150) {
			closeGif()
			$bgOpacity = 0;
		}else{
			$bgOpacity = 1;
		}

		$state.moving = false;
		scaleImg.set(1, {duration: 400});
		pointerMoveX.set(0, {duration: animationDuration})
		pointerMoveY.set(0, {duration: animationDuration})
	}

	const handleTouchMove = (e) => {
		//if we are further than 16px, return
		if(modalScrollY > 16) {
			console.log("Further than threshold, returning... just scrolling");
			return
		}

		$pointerMoveX = e.changedTouches[e.changedTouches.length-1].pageX - pointerInitialX
		$pointerMoveY = e.changedTouches[e.changedTouches.length-1].pageY - pointerInitialY

		// Detect if we want to scroll
		if(0 > $pointerMoveY) {
			//console.log("scroll direction is down, cancel draging. Initial: ",pointerInitialY, "current:",$pointerMoveY);
			return
		}


		if($pointerMoveY >=150) {
			//releaseToClose = true;
			if(playHaptic) {
				Haptics.impact({ style: ImpactStyle.Light });
				playHaptic = false;
			}
		}else{
			releaseToClose = false;
			playHaptic = true
		}
		
		preventTransform = false;
		$state.moving = true;

		if($pointerMoveY > 0) {
			console.log("changing scaleimggg?");
			$state.moving = true
			$scaleImg = (1-(0.0003*$pointerMoveY))
			scaleGrid = (1.5-(0.0005*$pointerMoveY))
			$bgOpacity = 1-(0.0008*$pointerMoveY)
		}else if($pointerMoveY < 0) {
			$state.moving = false
			pointerMoveX.set(0, {duration: 1000})
			pointerMoveY.set(0, {duration: 1000})
		}
		console.log("pointerMoveY:", $pointerMoveY);
	}

	const closeGif = async () => {
		console.log("closeGif()");
		flipGif("closing", gifEl, lastParent);
		await tick();
		
		animating = true;
		scaleGrid = 1
		console.log("animating:", animating)

		enableScroll()
		$state.opened = false;
	}
</script>

<div class="text-white relative">
	<div class="fixed top-0 left-0 h-[20%] z-[105] w-full gradient-to-b pointer-events-none transition-all duration-500 ease-in-out -translate-y-px {$state.opened ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-none"}" />
	<div class="fixed bottom-0 left-0 h-24 z-[9] w-full gradient-to-t pointer-events-none" />


	<div class="grid grid-cols-2 gap-2 {$state.moving ? "transition-none" : "transition-transform"} duration-[600ms] ease-[0.212,0.114,0.242,0.2815]
	{$state.opened ? "pointer-events-none" : "pointer-events-auto"}"
	bind:this={mainGrid}>
	<div
		class="backdrop fixed top-0 left-0 w-full h-full bg-black pointer-events-none z-[1] {$state.moving ? "transition-none" : "transition-opacity"} duration-[400ms]
		{$state.opened ? "opacity-100" : "opacity-50"}"
		style="background-color: rgba(0,0,0,{$bgOpacity});" />
		<h1 class="text-white font-bold text-[36px]/none px-1 mt-12 mb-4 col-span-2">Feed</h1>
		{#each data?.gifs as gif, index (gif?.id)}
			<Post
				{gif}
				on:click={(event) => openGif(event)}
			/>
		{/each}
	</div>
	<div
		id="detail"
		class="h-screen w-full rounded-t-[0px] fixed top-0 left-0 z-[99] overflow-y-scroll flex flex-col
		{$state.opened ? "translate-y-0 opening pointer-events-auto" : "translate-y-0 closing pointer-events-none"}
		{animating ? "pointer-events-none" : "pointer-events-none"}"
		
		on:touchstart={handleTouch}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchUp}
		bind:this={detailWrapper}
	>
		<button
			id="gif-preview"
			class="aspect-[3/4] w-full flex-shrink-0"
			bind:this={gifPreviewWrapper}
		></button>

		<div class="post-menu mx-4 flex gap-4 h-[64px] flex-shrink-0
		{$state.opened ? releaseToClose ? "opacity-0 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300" : "opacity-0 translate-y-[300px] transition-all duration-300"}"
		style="{$state.opened && $state.moving ? `transform: translateY(${-1*modalScrollY}px)` : ""}">
			<div class="flex gap-2 items-center">
				<div class="h-[42px] w-[42px] rounded-full bg-white/10 shrink-0" />
				<div class="flex flex-col gap-1.5">
					<div class="text-sm/none font-medium">gabriel.uhlir</div>
					<div class="text-xs/none opacity-50">4h ago</div>
				</div>
			</div>
			<div class="flex items-center gap-4 ml-auto text-white/20">
				<Report />
				<button on:click={() => {liked = !liked}}>
					<Heart style={liked && "text-rose-500"} />
				</button>
			</div>
		</div>
		<div class="h-[800px] bg-neutral-900 flex-shrink-0 rounded-t-[24px] px-4 pt-4 transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)]
		{$state.opened ? releaseToClose ? "opacity-0 translate-y-[64px]" : "translate-y-0 opacity-100 ease-out" : "translate-y-[64px] opacity-0 pointer-events-none ease-in"}"
		>
			<div class="flex gap-2 text-white/50">
				<div class="w-[42px] flex justify-center text-white/10"><Comment /></div>
				Comments
			</div>
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

	:global(img.post) {
		transition: 500ms border-radius 0s ease-in-out;
	}

	:global(.img-wrapper img) {
		border-radius: 16px;
	}

	:global(#gif-preview img) {
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 24px;
		border-bottom-right-radius: 24px;
	}
</style>
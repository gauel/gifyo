<script>
	import { crossfade } from '$lib/js/crossfade'
	import { flip } from 'svelte/animate'
	const [send, receive] = crossfade

	export let data;
</script>
<div class="text-white">
	<div class="fixed top-0 left-0 h-[20%] w-full gradient-to-b pointer-events-none" />
	<div class="fixed bottom-0 left-0 h-24 w-full gradient-to-t pointer-events-none" />
	<div class="grid grid-cols-2 gap-2">
		{#each data?.gifs as gif, index (gif?.id)}
			<a href="/{gif?.id}" out:send="{{key: gif?.id}}" animate:flip
			in:receive="{{key: gif?.id}}">
				<img
					src={data.PUBLIC_URL + gif?.gif?.url}
					alt=""
					class="rounded-xl aspect-[3/4] object-cover w-full"
				/>
			</a>
		{/each}
	</div>
</div>
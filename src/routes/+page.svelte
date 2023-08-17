<script>
	import { PUBLIC_URL } from '$lib/js/strapi';
	import { onMount } from 'svelte';
	import Post from '$lib/components/Post.svelte';

	export let data;



</script>
<div class="text-white">
	<div class="fixed top-0 left-0 h-[20%] w-full gradient-to-b pointer-events-none" />
	<div class="fixed bottom-0 left-0 h-24 w-full gradient-to-t pointer-events-none" />
	<div class="grid grid-cols-2 gap-2 py-12">
		{#each data?.gifs as gif, index (gif?.id)}
			<Post {gif} />
		{/each}
	</div>
	<div id="detail">
		
	</div>
</div>
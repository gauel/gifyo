<script>
	import { PUBLIC_URL } from '$env/static/public';

	export let gif = {};

	console.log("Image:", gif);
</script>

<button
	class="post-wrapper aspect-[3/4] "
	on:click
>
	<div class="img-wrapper">
		<img
			src={PUBLIC_URL + "/assets/" + gif?.gif}
			alt=""
			width="300"
			height="400"
			draggable="false"
			class="post aspect-[3/4] h-full object-cover w-full"
		/>
	</div>
</button>
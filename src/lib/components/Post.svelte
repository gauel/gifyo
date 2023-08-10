<script>
	import { PUBLIC_URL } from '$env/static/public';
		import { crossfade } from '$lib/js/crossfade'
		const [send, receive] = crossfade

	export let gif = {}
</script>

<button
	out:send="{{key: gif?.id}}"
	in:receive="{{key: gif?.id}}"
>
	<img
		src={PUBLIC_URL + gif?.gif?.url}
		alt=""
		class="rounded-xl aspect-[3/4] object-cover w-full"
	/>
</button>
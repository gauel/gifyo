<script>
	import { page } from '$app/stores';
	import { crossfade } from '$lib/js/crossfade'
	const [send, receive] = crossfade
</script>

<a
	href="/"
	out:send="{{key: $page.data.gid}}"
	in:receive="{{key: $page.data.gid}}"
>
	<img
		src='http://127.0.0.1:1337/uploads/gif4_c97a90d13b.gif'
		alt=""
		class="rounded-xl aspect-[3/4] object-cover"
		out:send="{{key: $page.data.gid}}"
		in:receive="{{key: $page.data.gid}}"
	/>
</a>
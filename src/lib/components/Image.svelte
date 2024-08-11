<script>
	import { lazyLoad } from '$lib/js/lazyLoad.js';

	export let src = '',
	alt = '',
	style = '';
</script>

<div class="img-wrapper relative {style}">
	<div class="ghost" />
	<img
		src={src}
		use:lazyLoad={src}
		class="relative object-cover opacity-0 transition-opacity duration-300"
		{alt}
		loading='lazy'
	/>
</div>
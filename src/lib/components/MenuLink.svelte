<script>
	import Fa from 'svelte-fa'
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, quintOut } from 'svelte/easing'

	export let icon, index = 1, style = "h-[44px]"
</script>

<button
	class="menu-link w-[220px] flex items-center justify-between pl-5 text-sm text-white/80 active:bg-white/5 active:text-white border-white/5 border-b last:border-none shrink-0 {style}
	"
	out:fade={{duration: 200 }}
	on:click
>
	<div><slot /></div>
	<Fa icon={icon} class="text-[16px] w-[54px] h-full flex items-center justify-center" />
</button>
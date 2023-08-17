<script>
	import Fa from 'svelte-fa'
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, quintOut } from 'svelte/easing'

	export let icon = null,
	clickable = true,
	index = 1,
	style = "h-[44px]";
</script>

<button
	class="menu-link w-[220px] flex items-center justify-between pl-5 text-sm text-white/80  border-white/5 border-b last:border-none shrink-0 {style}
	{clickable && "active:bg-white/5 active:text-white"}
	"
	class:pr-2={$$slots.toggle}
	out:fade={{duration: 200 }}
	on:click
>
	<div><slot /></div>
	<slot name="toggle" />
	{#if icon}
		<Fa icon={icon} class="text-[16px] w-[54px] h-full flex items-center justify-center" />
	{/if}
</button>

<style>
	.menu-link {
		transition: background-color 150ms 0s ease-in-out,
		color 150ms 0s ease-in-out
	}
</style>
<script>
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, quintOut } from 'svelte/easing'

	export let icon = "",
	clickable = true,
	disabled = false,
	soon = false,
	style = "h-[44px]";
</script>

<button
	class="menu-link w-[220px] flex items-center justify-between pl-5 text-sm text-white/80  border-white/5 border-b last:border-none shrink-0 {style}
	{clickable && "active:bg-white/5 active:text-white"}
	{disabled && "opacity-20 pointer-events-none bg-black/70"}
	"
	class:pr-2={$$slots.toggle}
	out:fade={{duration: 200 }}
	on:click
>
	<div class="flex gap-1 items-center">
		<div><slot /></div>
		{#if soon}
			<div class="uppercase text-[8px] leading-none h-4 px-1 rounded bg-white/10 flex items-center justify-center">soon</div>
		{/if}
	</div>
	<slot name="toggle" />
	{#if icon}
		<Icon icon={icon} class="h-[24px] w-[54px] flex items-center justify-center" />
	{/if}
</button>

<style>
	.menu-link {
		transition: background-color 150ms 0s ease-in-out,
		color 150ms 0s ease-in-out
	}
</style>
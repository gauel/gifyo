<script>
	import { slide } from "svelte/transition";

	export let type = 'text',
		placeholder = '',
		name = '',
		disabled = false,
		style = "",
		pattern = null,
		required = false,
		minlength = 0,
		error = null,
		value = "";


		const handleInput = (e) => {
			value = e.target.value;
		}
</script>

<div
	class="input-wrapper relative shrink-0 flex flex-col"
>
	<slot name="before" />
	<input
		{type}
		{placeholder}
		{name}
		{disabled}
		{required}
		{pattern}
		{minlength}
		{value}
		on:input={handleInput}
		on:change
		class="w-full placeholder-white/20 h-[50px] autofill:bg-yellow-200 invalid:bg-red-500/5 bg-white/5 px-4 rounded-xl text-lg backdrop-blur-lg disabled:bg-transparent focus-visible:outline-none {disabled ? 'text-white/50' : 'text-white'} {style}"
	/>
	{#if error}
		<div class="h-[20px] text-red-500 mt-1 text-xs px-4" transition:slide={{duration: 500, axis: `y`}} >{error}</div>
	{/if}
</div>

<style lang="css">
	input {
		border: solid 0.5px rgba(255, 255, 255, 0.1);
		transition: background-color 300ms ease-in-out, border-color 300ms ease-in-out;
	}

	input:invalid {
		border-color: theme(colors.red.500 / 50%);
		border-width: 0.5px;
	}

	input.disabled {
		background: rgba(255, 255, 255, 0.005);
	}
</style>

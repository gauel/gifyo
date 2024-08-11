<script>
	export let type = 'button',
		style = '',
		disabled = false,
		primary = true;

	const variants = {
		primary: `button w-auto backdrop-blur-lg shrink-0 px-8 rounded-[12px] text-white/80 text-lg font-medium flex items-center justify-center bg-[#440795] active:bg-[#37047b] h-[48px] min-h-[48px] bg-[#440795] active:bg-[#37047b] disabled:pointer-events-none disabled:bg-white/5 disabled:text-white/30`,
		simple: 'bg-transparent active:bg-transparent text-violet-500 active:text-violet-600 font-medium disabled:text-white/30 disabled:pointer-events-none'
	};
</script>

<button
	{type}
	{disabled}
	on:click
	class={variants[primary ? 'primary' : 'simple'] + ' ' + style}
>
	<slot />
</button>

<style lang="css">
	.button {
		transition: transform 400ms cubic-bezier(0.2, 0.9, 0.3, 1),
			box-shadow 400ms cubic-bezier(0.2, 0.9, 0.3, 1),
			background 400ms cubic-bezier(0.2, 0.9, 0.3, 1);
	}

	.button:not(:disabled) {
		box-shadow: 0px 30px 38px -16px rgba(255, 255, 255, 0.2) inset,
			0px 0.3px 0px 0px rgba(255, 255, 255, 0.3) inset,
			0px 1px 6px 0px rgba(255, 255, 255, 0.1) inset;
	}

	.button:active {
		box-shadow: 0px 30px 38px -16px rgba(255, 255, 255, 0) inset,
			0px 0.3px 0px 0px rgba(255, 255, 255, 0.3) inset,
			0px 1px 6px 0px rgba(255, 255, 255, 0.1) inset;
		transform: scale(0.98);
	}
</style>

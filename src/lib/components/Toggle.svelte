<script>
	import { Haptics, ImpactStyle } from '@capacitor/haptics';

	export let checked = false;

	const toggleCheck = () => {
		Haptics.impact({ style: ImpactStyle.Light });
		checked = !checked
	}
</script>

<button
	class="h-[26px] w-[42px] rounded-full border-[0.33px] border-white/10 p-[2px] transition-colors duration-300 ease-in-out flex items-center
	{checked ? "bg-sky-500" : "bg-white/10"}"
	on:click={toggleCheck}
>
	<div class="toggle-indicator h-[22px] w-[22px] bg-white rounded-full {checked && "translate-x-[16px]"}"
/>
</button>

<style lang="css">
	.toggle-indicator {
		transition: transform 200ms 0s ease-in-out;
	}
</style>
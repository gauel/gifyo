<script>
	import Fa from 'svelte-fa';
	import { faXmark, faBars, faPlus, faCircleUser, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
	import MenuLink from './MenuLink.svelte';
	import { Haptics, ImpactStyle } from '@capacitor/haptics';

	let opened = false,
	following = false;

	const toggleOpen = () => {
		Haptics.impact({ style: ImpactStyle.Light });
		opened = !opened;
		document.documentElement.classList[opened ? "add" : "remove"]("scroll-disabled")
	}

	import { clickOutside } from '$lib/js/clickOutside';
	import Toggle from './Toggle.svelte';
</script>

<button
	use:clickOutside
	on:click_outside={opened && toggleOpen}
	id="menu"
	class="fixed bottom-[calc(var(--safe-area-inset-bottom)+1rem)] right-4 overflow-hidden rounded-[16px] backdrop-blur-lg flex flex-col items-end justify-end
	{opened ? "w-[220px] h-[290px] bg-neutral-800/60" : "w-[54px] h-[54px] bg-white/10"}"
	class:opened={opened}
>

	{#if opened}
		<div class="border-black/30 border-b-[8px]">
			<MenuLink icon={faPlus} index={5}>New Gif</MenuLink>
			<MenuLink index={4} clickable={false}>
				Following only
				<Toggle bind:checked={following} slot="toggle" />
			</MenuLink>
		</div>
		<div class="border-black/30 border-b-[8px]">
			<MenuLink icon={faMagnifyingGlass} index={3} on:click={toggleOpen}>Search</MenuLink>
			<MenuLink icon={faBell} index={2}>Notifications</MenuLink>
			<MenuLink icon={faCircleUser} index={1}>Profile</MenuLink>
		</div>
		{/if}
		<MenuLink icon={opened ? faXmark : faBars} style="h-[54px] text-white/50" on:click={toggleOpen}>Close</MenuLink>
<!--

	<button
	class="h-[54px] w-full absolute bottom-0 right-0 flex items-center justify-between pl-5  text-sm"
	on:click={toggleOpen}
	>
	<div>Zavřít</div>
	<Fa icon={faBars} class="text-[16px] w-[54px] h-[54px] shrink-0 active:opacity-80 transition-opacity duration-200" />
</button>
-->
</button>

<style lang="css">
	#menu {
		transition: opacity 200ms 0s cubic-bezier(0, .9, .76, .99),
		width 200ms 0s cubic-bezier(0, .9, .76, .99),
		height 200ms 0s cubic-bezier(0, .9, .76, .99),
		border-radius 200ms 0s cubic-bezier(0, .9, .76, .99);
	}


</style>
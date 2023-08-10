<script>
	import Fa from 'svelte-fa';
	import { faXmark, faBars, faPlus, faCircleUser, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
	import MenuLink from './MenuLink.svelte';

	let opened = true;

	const toggleOpen = () => {
		opened = !opened;
	}

	import { clickOutside } from '$lib/js/clickOutside';
</script>

<button
	use:clickOutside
	on:click_outside={opened && toggleOpen}
	id="menu"
	class="fixed bottom-4 right-4 overflow-hidden rounded-[16px] backdrop-blur-lg flex flex-col items-end justify-end
	{opened ? "w-[220px] h-[282px] bg-neutral-800/60" : "w-[54px] h-[54px] bg-white/10 active:opacity-80"}"
	class:opened={opened}
>

	{#if opened}
		<div class="border-black/30 border-b-[8px]">
			<MenuLink icon={faPlus} index={5}>New Gif</MenuLink>
			<MenuLink icon={faXmark} index={4}>Only following</MenuLink>
		</div>
		<MenuLink icon={faMagnifyingGlass} index={3} on:click={toggleOpen}>Search</MenuLink>
		<MenuLink icon={faBell} index={2}>Notifications</MenuLink>
		<MenuLink icon={faCircleUser} index={1}>Profile</MenuLink>
		{/if}
		<MenuLink icon={opened ? faXmark : faBars} style="h-[54px]" on:click={toggleOpen}></MenuLink>
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
		transition: opacity 300ms 0s cubic-bezier(0, .9, .76, .99),
		width 300ms 0s cubic-bezier(0, .9, .76, .99),
		height 300ms 0s cubic-bezier(0, .9, .76, .99),
		border-radius 300ms 0s cubic-bezier(0, .9, .76, .99);
	}


</style>
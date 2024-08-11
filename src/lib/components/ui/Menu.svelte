<script>
	import MenuLink from './MenuLink.svelte';
	import { Haptics, ImpactStyle } from '@capacitor/haptics';
	import { state } from '$lib/js/store';

	let opened = false,
	following = false;

	const toggleOpen = () => {
		Haptics.impact({ style: ImpactStyle.Light });
		opened = !opened;
		document.documentElement.classList[opened ? "add" : "remove"]("scroll-disabled")
	}

	const newGif = () => {
		Haptics.impact({ style: ImpactStyle.Light });
		state.newGif = true;
		toggleOpen();
	}

	const logout = async () => {
		db.logout();
		goto(`/`);
	}

	import { clickOutside } from '$lib/js/clickOutside';
	import Toggle from '../Toggle.svelte';
	import { goto } from '$app/navigation';
	import { db } from '$lib/api/directus';
</script>

<button
	use:clickOutside
	on:click_outside={opened && toggleOpen}
	id="menu"
	class="fixed bottom-[calc(var(--safe-area-bottom)+1rem)] right-4 overflow-hidden rounded-[16px] backdrop-blur-lg flex flex-col items-end justify-end z-10
	{opened ? "w-[220px] h-[360px] bg-neutral-800/60" : "w-[54px] h-[54px] bg-white/10"}
	{$state.opened ? "translate-y-[calc(100%+var(--safe-area-bottom)+1rem)]" : "translate-y-none"}"
	class:opened={opened}
>

	{#if opened}
		<div class="border-black/30 border-b-[8px]">
			<MenuLink icon="fa6-solid:plus"  on:click={newGif}>New Gif</MenuLink>
			<MenuLink  clickable={false} disabled soon>
				Following only
				<Toggle bind:checked={following} slot="toggle" />
			</MenuLink>
		</div>
		<div class="border-black/30 border-b-[8px]">
			<MenuLink icon="fa6-solid:magnifying-glass"  on:click={toggleOpen} disabled soon>Search</MenuLink>
			<MenuLink icon="fa6-solid:bell"  disabled soon>Notifications</MenuLink>
			<MenuLink icon="fa6-solid:circle-user" >Profile</MenuLink>
			<MenuLink icon="fa6-solid:circle-user" on:click={logout} >Log out</MenuLink>
		</div>
		{/if}
		<MenuLink icon={opened ? "fa6-solid:xmark" : "fa6-solid:bars"} style="h-[54px] text-white/50" on:click={toggleOpen}>Close</MenuLink>
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
		border-radius 200ms 0s cubic-bezier(0, .9, .76, .99),
		transform 300ms 0s cubic-bezier(0, .9, .76, .99);
	}


</style>
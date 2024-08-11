<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { login } from '$lib/api/auth';


	// #region Variables
	import { db } from '$lib/api/directus';

	import gif1 from '$lib/assets/gifs/gif1.gif';
	import gif2 from '$lib/assets/gifs/gif2.gif';
	import gif3 from '$lib/assets/gifs/gif3.gif';
	import gif4 from '$lib/assets/gifs/gif4.gif';
	import gif5 from '$lib/assets/gifs/gif5.gif';
	import gif6 from '$lib/assets/gifs/gif6.gif';
	import gif7 from '$lib/assets/gifs/gif7.gif';
	import gif8 from '$lib/assets/gifs/gif8.gif';

	import appIcon from '$lib/assets/app-icon.png';

	import { Button, Input } from '$lib/components/ui';
	import Logo from '$lib/components/Logo.svelte';
	import { goto } from '$app/navigation';

	let register = false;

	const bgGifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif1, gif2, gif3, gif4];

	const toggleMode = () => (register = !register);

	const tryToLogin = async () => {
		loading = true;
		login(email, password)
	};

	let loading = false,
		nickname = '',
		email = 'g.uhlir@gmail.com',
		password = '9mkLW@Qd',
		password_confirm = '';

	$: readyToSend = register
		? nickname && email && password.length >= 8 && password_confirm && password === password_confirm
		: email && password.length >= 8;
</script>

<!-- #region HTML
 -->
<div class="w-full h-dvh overflow-hidden flex items-center">
	<div class="absolute inset-0 w-full h-dvh overflow-hidden z-0">
		<div class="gifs-bg grid grid-cols-2 gap-px w-full">
			{#each bgGifs as gif}
				<img src={gif} class="bg-violet-500/50 w-full aspect-[3/4] flex-1" alt="Background" />
			{/each}
		</div>
	</div>
	<form
		class="w-full gap-8 flex flex-col h-dvh px-8 bg-black/90 backdrop-blur pt-[calc(64px+var(--safe-area-top))] pb-16 overflow-auto relative z-10"
	>
		<!--
			<Logo style="w-8 h-8 mx-auto" />
		-->
		<img src={appIcon} alt="App icon" class="w-[72px] mx-auto" />
		<div class="flex flex-col gap-2 text-center items-center justify-center">
			<h1 class="text-3xl leading-none font-bold text-center">Life in motion</h1>
			<p class="opacity-50">Sign in to your account, {email}</p>
		</div>
		<div class="flex flex-col transition-all duration-500 ease-in-out">
			{#if register}
				<div transition:slide={{ duration: 500, axis: `y`, easing: quintOut }} class="w-full mb-4">
					<Input
						type="text"
						disabled={loading}
						required
						bind:value={nickname}
						name="nickname"
						minlength={4}
						placeholder="Nickname"
					/>
				</div>
			{/if}
			<Input
				type="email"
				disabled={loading}
				name="email"
				bind:value={email}
				placeholder="E-mail"
				style="mb-4"
			/>
			<Input
				type="password"
				minlength={8}
				disabled={loading}
				name="password"
				bind:value={password}
				placeholder="Password"
			/>
			{#if register}
				<div transition:slide={{ duration: 500, axis: `y`, easing: quintOut }} class="mt-4">
					<Input
						type="password"
						disabled={loading}
						name="password_confirm"
						minlength={8}
						bind:value={password_confirm}
						placeholder="Confirm password"
					/>
				</div>
			{/if}
		</div>

		<Button disabled={loading || !readyToSend} on:click={tryToLogin}>
			{#if loading}
				<div>Loading...</div>
			{:else}
				{register ? 'Register' : 'Login'}
			{/if}
		</Button>
		<Button primary={false} on:click={toggleMode} disabled={loading}
			>{register ? 'Log in' : 'Create new account'}</Button
		>
	</form>
</div>

<style>
	@keyframes slideUp {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-33.33%);
		}
	}

	.gifs-bg {
		animation: slideUp 15s linear infinite;
	}
</style>

<script>
	import "$lib/app.css"
	import Menu from "$lib/components/ui/Menu.svelte";
	import { onMount } from "svelte";

	/* SEO */
	let title = "Page title",
	description = "Description",
	shareImage = "/ogimage.jpg",
	themeColor = "#000";

	onMount(() => {
		let pixelRatio = window.devicePixelRatio;
		console.log("Pixel ratio:", pixelRatio);
		document.querySelector(':root').style.setProperty('--pixel-ratio', pixelRatio);
	})
</script>

<!-- Hardcoded SEO -->
<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Language" content="cs" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1, viewport-fit=cover" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={shareImage} />
	<meta property="og:type" content="website" />

	<meta property="twitter:title" content="" />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={shareImage} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="theme-color" content={themeColor} />
	<link href="/favicon.png" rel="icon" />
	<link href="/touchicon.png" rel="shortcut icon" type="image/x-icon" />
	<link href="/touchicon.png" rel="apple-touch-icon" />
	<link href="/manifest.json" rel="manifest" crossorigin="use-credentials" />
</svelte:head>

<slot />